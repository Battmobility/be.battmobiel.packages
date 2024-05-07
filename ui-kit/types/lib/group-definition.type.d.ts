export interface GroupDefinitionBasic extends Readonly<{
    id: string;
    label?: string;
    translation?: string;
    icon?: string;
}> {
}
export interface GroupDefinitionWithIdentifiers extends GroupDefinitionBasic, Readonly<{
    /**
     * @Deprecated(since = "59.9.0", forRemoval = true)
     */
    groupIdentifiers?: (string | number)[];
    /**
     * Identifiers that must be part of the value it will be compared against.
     */
    groupIdentifiersIncl?: (string | number)[];
    /**
     * Determines the strategy of the provided identifiers.
     * This property will only have effect if the value (selector) which the group identifiers are compared against is an array.
     *
     * 'or': at least one identifier must match.
     * 'and': all identifiers must match.
     *
     * Defaults to: 'or'.
     */
    groupIdentifiersInclStrategy?: 'or' | 'and';
    /**
     * Identifiers that must NOT be part of the value it will be compared against.
     */
    groupIdentifiersExcl?: (string | number)[];
    /**
     * Determines the strategy of the provided identifiers.
     * This property will only have effect if the value (selector) which the group identifiers are compare against is an array.
     *
     * 'or': at least one identifier must match.
     * 'and': all identifiers must match.
     *
     * Defaults to: 'or'.
     */
    groupIdentifiersExclStrategy?: 'or' | 'and';
}> {
}
export interface GroupDefinitionWithIsAll extends GroupDefinitionBasic, Readonly<{
    isAll: true;
}> {
}
export declare type GroupDefinition = GroupDefinitionWithIdentifiers | GroupDefinitionWithIsAll;
