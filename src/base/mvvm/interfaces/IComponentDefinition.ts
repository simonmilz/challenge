import {IView} from './IView'
import {IViewModel} from './IViewModel'

export interface IComponentDefinition{
    view: any,
    displayName?: string
    inputs?: string[]
    outputs?: string[]
}