type CreateEntityProps<EntityProps> = {
    id: string;
    props: EntityProps;
};

export abstract class Entity<EntityProps> {
    private id: string;
    private props: EntityProps;

    constructor({ id, props }: CreateEntityProps<EntityProps>) {
        this.id = id;
        this.props = props;
    }
}
