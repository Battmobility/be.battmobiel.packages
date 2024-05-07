import { TableListConfig } from '../classes/table-list-config.class';
/**
 * We use this builder to create an tableConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
export declare class TableListConfigBuilder<T> {
    createConfig(): TableListConfig<T>;
}
