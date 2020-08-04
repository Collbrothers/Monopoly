

export class Player {
    public pos: number
    public money: number
    public name: string
    /**
     * 
     * @param name Name of the human behind the player
     */
    constructor(name: string) {
        this.pos = 0
        this.money = 1500
        this.name = name
    }
    destroy(): void {

    }
    move(roll: number): number {
        return this.pos += roll
    }
}
