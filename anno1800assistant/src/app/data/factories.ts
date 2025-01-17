import { PopulationLevel } from "./populations";
import { Items, Item, ItemSaveInfo } from './items';

export class Factories {
    private getRaw(): FactoryRaw[] {
        return [{"ID":101122,"Name":"Dynamite Shop","CycleTime":0,"Inputs":[],"Outputs":[],"IsOldWorld":false,"IsNewWorld":false},{"ID":100806,"Name":"Edvard's Timber Yard","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":false,"IsNewWorld":false},{"ID":100767,"Name":"Edvard's Church","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010350,"Amount":0}],"IsOldWorld":false,"IsNewWorld":false},{"ID":1010342,"Name":"Cigar Factory","CycleTime":0,"Inputs":[{"ProductID":1010252,"Amount":1},{"ProductID":1010242,"Amount":1}],"Outputs":[{"ProductID":1010259,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101266,"Name":"Poncho Darner","CycleTime":0,"Inputs":[{"ProductID":120036,"Amount":1}],"Outputs":[{"ProductID":120043,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010317,"Name":"Sugar Refinery","CycleTime":0,"Inputs":[{"ProductID":1010251,"Amount":1}],"Outputs":[{"ProductID":1010239,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101271,"Name":"Tortilla Maker","CycleTime":0,"Inputs":[{"ProductID":1010193,"Amount":1},{"ProductID":120034,"Amount":1}],"Outputs":[{"ProductID":120035,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101264,"Name":"Fried Plantain Kitchen","CycleTime":0,"Inputs":[{"ProductID":120042,"Amount":1},{"ProductID":120041,"Amount":1}],"Outputs":[{"ProductID":120033,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101252,"Name":"Coffee Roaster","CycleTime":0,"Inputs":[{"ProductID":120031,"Amount":1}],"Outputs":[{"ProductID":120032,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010341,"Name":"Chocolate Factory","CycleTime":0,"Inputs":[{"ProductID":1010254,"Amount":1},{"ProductID":1010239,"Amount":1}],"Outputs":[{"ProductID":1010258,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010340,"Name":"Rum Distillery","CycleTime":0,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010251,"Amount":1}],"Outputs":[{"ProductID":1010257,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101273,"Name":"Bombín Weaver","CycleTime":0,"Inputs":[{"ProductID":1010240,"Amount":1},{"ProductID":120044,"Amount":1}],"Outputs":[{"ProductID":120037,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101415,"Name":"Felt Producer","CycleTime":0,"Inputs":[{"ProductID":120036,"Amount":1}],"Outputs":[{"ProductID":120044,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010318,"Name":"Cotton Mill","CycleTime":0,"Inputs":[{"ProductID":1010253,"Amount":1}],"Outputs":[{"ProductID":1010240,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101262,"Name":"Fish Oil Factory","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120042,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010339,"Name":"Pearl Farm","CycleTime":90,"Inputs":[],"Outputs":[{"ProductID":1010256,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101272,"Name":"Alpaca Farm","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120036,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101270,"Name":"Corn Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":120034,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101263,"Name":"Plantain Plantation","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120041,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101251,"Name":"Coffee Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":120031,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010333,"Name":"Caoutchouc Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010255,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010332,"Name":"Cocoa Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010254,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010331,"Name":"Cotton Plantation","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010253,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010330,"Name":"Tobacco Plantation","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010252,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010329,"Name":"Sugar Cane Plantation","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010251,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010364,"Name":"Members Club","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010355,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010362,"Name":"University","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010353,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010361,"Name":"Variety Theatre","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010352,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010359,"Name":"Church","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010350,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010365,"Name":"Bank","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010356,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010360,"Name":"School","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010351,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010358,"Name":"Pub","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010349,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":120020,"Name":"Market","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":120020,"Amount":0}],"IsOldWorld":true,"IsNewWorld":false},{"ID":101250,"Name":"Spectacle Factory","CycleTime":90,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":120030,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010328,"Name":"Jewellers","CycleTime":0,"Inputs":[{"ProductID":1010256,"Amount":1},{"ProductID":1010249,"Amount":1}],"Outputs":[{"ProductID":1010250,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010327,"Name":"Goldsmiths","CycleTime":60,"Inputs":[{"ProductID":1010226,"Amount":1},{"ProductID":1010233,"Amount":1}],"Outputs":[{"ProductID":1010249,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010326,"Name":"Gramophone Factory","CycleTime":120,"Inputs":[{"ProductID":1010242,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":1010248,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010284,"Name":"Sewing Machine Factory","CycleTime":0,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010206,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010324,"Name":"Clockmakers","CycleTime":90,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":1010249,"Amount":1}],"Outputs":[{"ProductID":1010246,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010323,"Name":"Bicycle Factory","CycleTime":0,"Inputs":[{"ProductID":1010255,"Amount":1},{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010245,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010321,"Name":"Filament Factory","CycleTime":60,"Inputs":[{"ProductID":1010226,"Amount":1}],"Outputs":[{"ProductID":1010243,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010320,"Name":"Marquetry Workshop","CycleTime":60,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010242,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010319,"Name":"Glassmakers","CycleTime":0,"Inputs":[{"ProductID":1010228,"Amount":1}],"Outputs":[{"ProductID":1010241,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010300,"Name":"Dynamite Factory","CycleTime":60,"Inputs":[{"ProductID":1010234,"Amount":1},{"ProductID":1010232,"Amount":1}],"Outputs":[{"ProductID":1010222,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010315,"Name":"Framework Knitters","CycleTime":0,"Inputs":[{"ProductID":1010197,"Amount":1}],"Outputs":[{"ProductID":1010237,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010314,"Name":"Malthouse","CycleTime":0,"Inputs":[{"ProductID":1010192,"Amount":1}],"Outputs":[{"ProductID":1010236,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010313,"Name":"Flour Mill","CycleTime":0,"Inputs":[{"ProductID":1010192,"Amount":1}],"Outputs":[{"ProductID":1010235,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010312,"Name":"Rendering Works","CycleTime":60,"Inputs":[{"ProductID":1010199,"Amount":1}],"Outputs":[{"ProductID":1010234,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010311,"Name":"Gold Mine","CycleTime":150,"Inputs":[],"Outputs":[{"ProductID":1010233,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010309,"Name":"Limestone Quarry","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010231,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010308,"Name":"Copper Mine","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010230,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010307,"Name":"Zinc Mine","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010229,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010305,"Name":"Iron Mine","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010227,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010304,"Name":"Coal Mine","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010226,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":101331,"Name":"Oil Refinery","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010566,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010282,"Name":"Brass Smeltery","CycleTime":60,"Inputs":[{"ProductID":1010229,"Amount":1},{"ProductID":1010230,"Amount":1}],"Outputs":[{"ProductID":1010204,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010303,"Name":"Cab Assembly Line","CycleTime":60,"Inputs":[{"ProductID":1010211,"Amount":1},{"ProductID":1010224,"Amount":1}],"Outputs":[{"ProductID":1010225,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010302,"Name":"Motor Assembly Line","CycleTime":90,"Inputs":[{"ProductID":1010219,"Amount":1},{"ProductID":1010204,"Amount":1}],"Outputs":[{"ProductID":1010224,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010301,"Name":"Heavy Weapons Factory","CycleTime":120,"Inputs":[{"ProductID":1010219,"Amount":1},{"ProductID":1010222,"Amount":1}],"Outputs":[{"ProductID":1010223,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010299,"Name":"Weapon Factory","CycleTime":90,"Inputs":[{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010221,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010297,"Name":"Furnace","CycleTime":0,"Inputs":[{"ProductID":1010227,"Amount":1},{"ProductID":1010226,"Amount":1}],"Outputs":[{"ProductID":1010219,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010296,"Name":"Steelworks","CycleTime":45,"Inputs":[{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010218,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":100659,"Name":"Champagne Cellar","CycleTime":0,"Inputs":[{"ProductID":120014,"Amount":1},{"ProductID":1010241,"Amount":1}],"Outputs":[{"ProductID":120016,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010316,"Name":"Butcher's","CycleTime":60,"Inputs":[{"ProductID":1010199,"Amount":1}],"Outputs":[{"ProductID":1010238,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010294,"Name":"Schnapps Distillery","CycleTime":0,"Inputs":[{"ProductID":1010195,"Amount":1}],"Outputs":[{"ProductID":1010216,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010295,"Name":"Cannery","CycleTime":90,"Inputs":[{"ProductID":1010227,"Amount":1},{"ProductID":1010215,"Amount":1}],"Outputs":[{"ProductID":1010217,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010293,"Name":"Artisanal Kitchen","CycleTime":120,"Inputs":[{"ProductID":1010193,"Amount":1},{"ProductID":1010198,"Amount":1}],"Outputs":[{"ProductID":1010215,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010292,"Name":"Brewery","CycleTime":60,"Inputs":[{"ProductID":1010194,"Amount":1},{"ProductID":1010236,"Amount":1}],"Outputs":[{"ProductID":1010214,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010291,"Name":"Bakery","CycleTime":60,"Inputs":[{"ProductID":1010235,"Amount":1}],"Outputs":[{"ProductID":1010213,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010289,"Name":"Coachmakers","CycleTime":120,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010255,"Amount":1}],"Outputs":[{"ProductID":1010211,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":100416,"Name":"Clay Pit","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010201,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010288,"Name":"Sailmakers","CycleTime":0,"Inputs":[{"ProductID":1010197,"Amount":1}],"Outputs":[{"ProductID":1010210,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010285,"Name":"Window-Makers","CycleTime":60,"Inputs":[{"ProductID":120008,"Amount":1},{"ProductID":1010241,"Amount":1}],"Outputs":[{"ProductID":1010207,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010286,"Name":"Light Bulb Factory","CycleTime":60,"Inputs":[{"ProductID":1010241,"Amount":1},{"ProductID":1010243,"Amount":1}],"Outputs":[{"ProductID":1010208,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010325,"Name":"Fur Dealer","CycleTime":0,"Inputs":[{"ProductID":1010209,"Amount":1},{"ProductID":1010240,"Amount":1}],"Outputs":[{"ProductID":1010247,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":100451,"Name":"Sawmill","CycleTime":15,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010196,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010283,"Name":"Brick Factory","CycleTime":60,"Inputs":[{"ProductID":1010201,"Amount":1}],"Outputs":[{"ProductID":1010205,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010281,"Name":"Soap Factory","CycleTime":0,"Inputs":[{"ProductID":1010234,"Amount":1}],"Outputs":[{"ProductID":1010203,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010280,"Name":"Concrete Factory","CycleTime":60,"Inputs":[{"ProductID":1010231,"Amount":1},{"ProductID":1010219,"Amount":1}],"Outputs":[{"ProductID":1010202,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010560,"Name":"Sand Mine","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010228,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010310,"Name":"Saltpeter Works","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010232,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010278,"Name":"Fishery","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010200,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":100655,"Name":"Vineyard","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":120014,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":100654,"Name":"Red Pepper Farm","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010198,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010558,"Name":"Hunting Cabin","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010209,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010269,"Name":"Pig Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010199,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010267,"Name":"Sheep Farm","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010197,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010266,"Name":"Lumberjack's Hut","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010265,"Name":"Potato Farm","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010195,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010264,"Name":"Hop Farm","CycleTime":90,"Inputs":[],"Outputs":[{"ProductID":1010194,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010263,"Name":"Cattle Farm","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010193,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":1010262,"Name":"Grain Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010192,"Amount":1}],"IsOldWorld":true,"IsNewWorld":false},{"ID":101259,"Name":"Pub","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010349,"Amount":0}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101258,"Name":"Church","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010350,"Amount":0}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101296,"Name":"Marquetry Workshop","CycleTime":60,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010242,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101311,"Name":"Gold Mine","CycleTime":150,"Inputs":[],"Outputs":[{"ProductID":1010233,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":1010561,"Name":"Oil Refinery","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":1010566,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101268,"Name":"Brick Factory","CycleTime":60,"Inputs":[{"ProductID":1010201,"Amount":1}],"Outputs":[{"ProductID":1010205,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101267,"Name":"Clay Pit","CycleTime":0,"Inputs":[],"Outputs":[{"ProductID":1010201,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101265,"Name":"Sailmakers","CycleTime":0,"Inputs":[{"ProductID":1010197,"Amount":1}],"Outputs":[{"ProductID":1010210,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101261,"Name":"Sawmill","CycleTime":15,"Inputs":[{"ProductID":120008,"Amount":1}],"Outputs":[{"ProductID":1010196,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101303,"Name":"Saltpeter Works","CycleTime":120,"Inputs":[],"Outputs":[{"ProductID":1010232,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101269,"Name":"Cattle Farm","CycleTime":60,"Inputs":[],"Outputs":[{"ProductID":1010193,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true},{"ID":101260,"Name":"Lumberjack's Hut","CycleTime":15,"Inputs":[],"Outputs":[{"ProductID":120008,"Amount":1}],"IsOldWorld":false,"IsNewWorld":true}];
    }

    _allFactories: FactoryRaw[]
    get AllFactories(): FactoryRaw[] {
        if (!this._allFactories) {
            var result = this.getRaw();
            // Hacking in a factory for electricity since it doesn't seem to count as a public service building in the game files
            result.push({ "ID":1, "Name":"Electricity", "CycleTime":0, "Inputs":[], "Outputs":[{ "ProductID":1010354, "Amount":0 }], "IsOldWorld":true, "IsNewWorld":false  });
            result.push({ "ID":2, "Name":"Chapel", "CycleTime":0, "Inputs":[], "Outputs":[{ "ProductID":120050, "Amount":0 }], "IsOldWorld":true, "IsNewWorld":false  });
            result.push({ "ID":3, "Name":"Boxing Arena", "CycleTime":0, "Inputs":[], "Outputs":[{ "ProductID":1010348, "Amount":0 }], "IsOldWorld":false, "IsNewWorld":true });
            this._allFactories = result;
        }

        return this._allFactories;
    }
}


class FactoryRaw {
    ID: number
    Name: string
    CycleTime: number
    Inputs: FactoryIngredient[]
    Outputs: FactoryIngredient[]
    IsOldWorld: boolean
    IsNewWorld: boolean
}

export class Factory extends FactoryRaw {
    constructor(raw: FactoryRaw) {
        super();
        this.ID = raw.ID;
        this.Name = raw.Name;
        this.CycleTime = raw.CycleTime;
        this.Inputs = raw.Inputs;
        this.Outputs = raw.Outputs;
        this.IsOldWorld = raw.IsOldWorld;
        this.IsNewWorld = raw.IsNewWorld;
        this.Items = new Items().AllItems.filter(i => i.ItemEffectTargets.includes(this.ID)).map(i => new Item(i));
    }

    Items: Item[] = []
    ChildFactories: Factory[] = []
    ParentFactory?: Factory = null

    get ParentFactoryOrThisRecursive(): Factory {
        if (!this.ParentFactory) {
            return this;
        }

        return this.ParentFactory.ParentFactoryOrThisRecursive;
    }
    
    _enabled: boolean = false
    get Enabled(): boolean {
        return this._enabled;
    }

    set Enabled(newVal: boolean) {
        this._enabled = newVal;
        for(var i = 0; i < this.ChildFactories.length; i++) {
            this.ChildFactories[i].Enabled = this.Enabled;
        }
    }

    BuiltCount: number = 0
    Productivity: number = 100
    ChildLevel: number = 0
    TradeBalance: number = 0

    GetRequiredCount(allPopulationLevels: PopulationLevel[]): number {
        if (this.Outputs[0].Amount === 0) {
            // Public service building
            return 0;
        }

        let amountRequiredPerMinute = 0;
        let outputProductID = this.Outputs[0].ProductID;
        let cycleTime = this.CycleTime > 0 ? this.CycleTime : 30;

        for (var i = 0; i < allPopulationLevels.length; i++) {
            amountRequiredPerMinute += allPopulationLevels[i].GetProductRequirement(outputProductID);
        }        

        // Requirements appear to be in tons per second, so multiply by 60
        amountRequiredPerMinute *= 60;

        let requiredFactoriesFromParent = 0;
        if (this.ParentFactory) {
            let parentInput = this.ParentFactory.Inputs.filter(i => i.ProductID === outputProductID)[0];
            if (parentInput) {
                let parentRequiredFactories = this.ParentFactory.BuiltCount * (this.ParentFactory.Productivity / 100);
                let parentCycleTime = this.ParentFactory.CycleTime > 0 ? this.ParentFactory.CycleTime : 30;                
                let childParentFactoryRatio = parentInput.Amount / this.Outputs[0].Amount * cycleTime / parentCycleTime;
                requiredFactoriesFromParent = parentRequiredFactories * childParentFactoryRatio;
            }
        }

        let producedPerMinute = this.Outputs[0].Amount * 60 / cycleTime;

        return Math.round((amountRequiredPerMinute / producedPerMinute + requiredFactoriesFromParent) * 100 * 100 / this.Productivity) / 100;
    }

    GetSatisfactionClass(allPopulationLevels: PopulationLevel[]): string {
        let result = 'factory';

        if (this.Outputs[0].Amount === 0) {
            result = result + ' publicService';

            if (this.Enabled) {
                result = result + ' satisfied';
            }

            return result;
        }
        
        if (!this.Enabled) {
            return result;
        }

        let required = this.GetRequiredCount(allPopulationLevels);
        let satisfaction = this.BuiltCount + this.TradeBalance;

        if (this.ParentFactory || required === 0) { 
            if(satisfaction >= required) {
                result = result + ' satisfied';
            }
            else {
                result = result + ' unsatisfied';
            }
        }
        else {
            if(satisfaction > required) {
                result = result + ' satisfied';
            }
            else if (required - satisfaction < 0.5) {
                result = result + ' slightlyUnsatisfied';
            }
            else {
                result = result + ' unsatisfied';
            }
        }

        return result;
    }

    IsInUse(allPopulationLevels: PopulationLevel[]) {        
        let relevantFactory = this as Factory;
        while (relevantFactory.ParentFactory) {
            relevantFactory = relevantFactory.ParentFactory;
        }

        return allPopulationLevels.filter(p => 
            p.Inputs.filter(input => input.ProductID === relevantFactory.Outputs[0].ProductID).length > 0
            && (p.HouseCount > 0 || p.ShowUnused)            
        ).length > 0;        
    }

    Save(): FactorySaveInfo {
        let items: ItemSaveInfo[] = [];
        this.Items.forEach(function(item: Item) {
            items.push(item.Save());
        });
        return {
            FactoryID: this.ID,
            ParentFactoryID: this.ParentFactoryOrThisRecursive.ID,
            Enabled: this.Enabled,
            BuiltCount: this.BuiltCount,
            Productivity: this.Productivity,
            TradeBalance: this.TradeBalance,
            Items: items
        };
    }
}

export class FactoryIngredient {
    ProductID: number
    Amount: number
}

export class FactorySaveInfo {
    FactoryID: number
    ParentFactoryID?: number
    Enabled: boolean
    BuiltCount: number
    Productivity: number
    TradeBalance: number
    Items: ItemSaveInfo[]
}

/*
TODO:
- When building is built, show amount of sub-chains needed for max efficiency (accounting for altered productivity of the base factory), f.e.x: schnapps at 200% productivity requires 2 schnapps farms for full productivity
- show legendary npc's that modify input / add output affecting the building chain / double the output of the factory (ignore electricity and productivity boosts, users can still fill that in)
- fix trade calculation??  i think its bugged
- set target for trade? this way we can show the amount of incoming mines per island and glassmakers per island?



- add mines as source (new option Mines at the top near the residence input?)
- add sand mine / glassmakers as source (new option Mines at the top near the residence input?)
- add Caoutchouc Plantation as source (new option Farms near the residence input?)
- maybe as selectables where you can select the factory chain you want on the island? makes it more dynamic and thus complicated to built, but it scales the best
*/