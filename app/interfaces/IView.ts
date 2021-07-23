export interface IView<T> {
    
    Template(model: T): String;
    
    Update(model: T): void;
}