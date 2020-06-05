/**
 * Action types
 */
export enum ListsTypes {
    LOAD_REQUEST = '@lists/LOAD_REQUEST',
    LOAD_SUCCCES = '@lists/LOAD_SUCCCES',
    LOAD_FAILURE = '@lists/LOAD_FAILURE'
  }
  
  /**
   * Data types
   */
  export interface List {
    id: number
    name: string
  }
  
  /**
   * State type
   */
  export interface ListsState {
    readonly data: List[]
    readonly loading: boolean
    readonly error: boolean
  }