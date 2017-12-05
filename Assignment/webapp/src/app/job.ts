export class Job {
    public uuid: string;
    public type: string;
    public status: string;
    public cpu: number;
    public runtime: number;

    constructor(id: string, type: string, status: string, cpu: number, runtime: number) {
        this.uuid = id;
        this.type = type;
        this.status = status;
        this.cpu = cpu;
        this.runtime = runtime;
    }
}
