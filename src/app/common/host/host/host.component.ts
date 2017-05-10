import { Component, OnInit, ViewChild, Input, ViewContainerRef, OnDestroy, OnChanges, ComponentFactory, ComponentRef, ComponentFactoryResolver, SimpleChanges, ChangeDetectionStrategy, ReflectiveInjector } from '@angular/core';
import { SubscriptionComponent } from '../../subscription/subscription.component';
import { AppStructure, AppHost } from '../../app-structure';

@Component({
    selector: 'app-host',
    templateUrl: './host.component.html',
    styleUrls: ['./host.component.less']
})
export class HostComponent extends SubscriptionComponent {
    @ViewChild('dynamicContainer', { read: ViewContainerRef }) public dynamicContainer: ViewContainerRef;

    private dialogs = [];

    modelChange() {
        if (this.model) {
            this.model.forEach(structure => {
                if (structure.repeat) {
                    this.subscribe<any>(structure.subs, (data) => {
                        if (data) {
                            data.forEach((dataItem, index) => {
                                this.dataStore.set(structure.subs + index, dataItem);
                            });
                            this.resetComponents();
                        }
                    });
                }
            });
            this.resetComponents();
        }
    }

    resetComponents() {
        let components = [];
        this.model.forEach(structure => {
            let cData = [null];
            if (structure.repeat) {
                cData = this.dataStore.get<any[]>(structure.subs);
                if (cData == null) {
                    return;
                }
            }
            (cData as any[]).forEach((rData, index) => {
                let host = structure.hosts.find(f => f.subs == this.subs);
                host.components.forEach(c => {
                    let str = Object.assign({}, structure);
                    str.dialog = host.dialog;
                    if (structure.repeat) {
                        str.subs = str.subs + index;
                    }
                    components.push({
                        component: c, context: str
                    });
                });
            });
        });

        this.dialogs.forEach(dialog => { dialog.close(); });
        this.dialogs.length = 0;
        this.dynamicContainer.clear();

        components.forEach(comp => {
            this.createComponent(comp);
        })
    }


    private createComponent(componentData) {
        try {
            if (componentData && componentData.component) {
                const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(componentData.component);
                let componentRef = this.dynamicContainer.createComponent(factory);




                componentRef.instance.subs = componentData.context.subs;
                componentRef.instance.key = componentData.context.key;
                componentRef.instance.label = componentData.context.label;

                componentRef.instance.ngOnInit();
            }
        } catch (e) {
            console.log(e);
        }
    }

}

