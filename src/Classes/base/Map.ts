import { Horse, Iron, BattleShip, Boot, Dog, Car, Cat, Hat } from "../";
import { Player } from "./Player"
import { Collection } from "../../Structures/Collection";
interface Plot_Prices {
    basePrice: number;
    PPH: number;
    mortage: number; 
}
interface Plot_Earning {
    rent: number;
    one: number;
    two: number;
    three: number;
    four: number;
    hotel: number;
}
interface Plot {
    name: string;
    prices: Plot_Prices;
    earnings: Plot_Earning;
    owner: Player | null    
}
interface Plot_Others {
    name: string;
    price: number;
    earnings: number;
    owner: Player | null;
}
interface Others {
    information: string;
    typeOf?: "com" | "can" | "jail" 
}
interface PaidServices {
    amount: number | string;

}
export class MonoMap {
    public players: Array<Player>;
    public m: Collection<number, Plot | Plot_Others | Others> = new Collection()
    constructor(players: Array<Player>) {
        this.players = players
        if(this.players.length <= 1) console.log("Only one player playing...")
        this.init()
    }
    private init() {
        this.m.set(0,{information: "Go Plot, Earn 200$ by passing by this"})
        this.m.set(1, {name: "Mediterranean Avenue", prices: {basePrice: 60, PPH: 50, mortage: 30}, earnings: {rent: 2, one:10,two:30,three:90,four:160,hotel:250},owner: null})
        this.m.set(2, {name: "Baltic Avenue", owner: this.players[0], prices: {basePrice:60,PPH: 50,mortage:30}, earnings: {rent:4,one:20,two:60,three: 180, four:320,hotel:450}})
        this.m.set(3, {name:"Oriental Avenue", owner: null, prices: {basePrice: 100, PPH:50, mortage:50}, earnings: {rent:6, one:30,two:90,three:270,four:400,hotel:550}})
        this.m.set(4, {name:"Vermont Avenue", owner: null, prices: {basePrice: 100, PPH: 50, mortage: 50}, earnings: {rent:6, one:30, two:90, three:270, four:400, hotel:550}})
    }
}
let m = new MonoMap([new Horse("Aron")])
//@ts-ignore
let d = m.m.find(e => e.owner!.name === "Aron")
console.log(d)