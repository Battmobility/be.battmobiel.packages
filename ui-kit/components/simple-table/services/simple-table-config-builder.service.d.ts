import { SimpleTableConfig } from '../classes/simple-table-config.class';
/**
 * We use this builder to create an tableConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
export declare class SimpleTableConfigBuilder<T> {
    createConfig(): SimpleTableConfig<T>;
}
