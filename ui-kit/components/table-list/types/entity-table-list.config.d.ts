import { TableListConfig } from '../classes/table-list-config.class';
export interface EntityTableListConfig extends Readonly<{
    tableList: TableListConfig<any>;
}> {
}
