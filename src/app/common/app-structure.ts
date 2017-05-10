export class AppStructure {
    public key: string;
    public hosts: Array<AppHost>
    public subs: string;
    public type: any;
    public label: string;
    public storeKey: string;
    public repeat: boolean;

}

export class AppHost {
    public subs: string;
    public components: Array<any>;
}
