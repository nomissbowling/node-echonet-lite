/** Declaration file generated by dts-gen */
declare module "node-echonet-lite" {
  interface Params {
    lang?: string;
    type?: string;
    adapter?: string;
    id?: string;
    pass?: string;
    baud?: number;
  }
  interface Callback {
    (err?: Error, res?: any): void;
  }
  export default class EchonetLite {
    constructor (params: Params);/*:EchonetLite;*/

    close(callback: Callback): void;

    getClassGroupName(group_code: number): string;

    getClassName(group_code: number, class_code: number): string;

    getPropertyMaps(address: string, eoj: number[], callback: Callback): any;

    getPropertyName(group_code: number, class_code: number, epc: number): any;

    getPropertyValue(
      address: string,
      eoj: number[],
      epc: number,
      callback: Callback
    ): any;

    init(callback: Callback): void;

    isSupportedEpc(
      group_code: number,
      class_code: number,
      epc: number
    ): boolean;

    send(
      address: string,
      eoj: number[],
      esv: any,
      prop: any,
      callback: Callback
    ): void;

    setLang(lang: string): any;

    setPropertyValue(
      address: string,
      eoj: number[],
      epc: number,
      edt: any,
      callback?: Callback
    ): any;

    setSelfEoj(eoj: number[]): void;

    startDiscovery(callback: Callback): void;

    stopDiscovery(): void;
  }
}