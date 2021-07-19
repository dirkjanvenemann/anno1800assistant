var fs = require('fs');
var xml2object = require('xml2object');
var stream = fs.createReadStream('assets.xml');
var xml = new xml2object(['Asset'], stream);

var npcs = [];
var ItemEffectTargetPool = {};

function GetFactoryIDs(ItemEffectTargets) {
    var ReturnValue = [];
    ItemEffectTargets.forEach(function(ItemEffectTarget) {
        if(ItemEffectTarget in ItemEffectTargetPool) {
            ItemEffectTargetPool[ItemEffectTarget].Values.ItemEffectTargetPool.EffectTargetGUIDs.Item.forEach(function(Item) {
                ReturnValue.push(Number.parseInt(Item.GUID));
            });
        } else {
            ReturnValue.push(ItemEffectTarget);
        }
    });
    return ItemEffectTargets;
}

xml.on('object', function(name, asset) {
  // console.log(asset);
  // console.log(asset.Values);
    // Items that slot into warehouse / 
    if(asset.Template === 'GuildhouseItem') {
        // Items that don't affect specific buildings (seems to be provide fertility items)
        if(typeof asset.Values.ItemEffect == 'undefined') {
            return;
        }
        npcs.push(asset);
    }
    if(asset.Template === 'ItemEffectTargetPool') {
        var id = Number.parseInt(asset.Values.Standard.GUID);
        ItemEffectTargetPool[id] = asset;
    }
});

xml.on('end', function() {
    var Items = [];
    npcs.forEach(function(npc) {
        /*
        collect:
        - productivity modifier (does it change from    { ProductivityUpgrade: { Value: '50', Percental: '1' },)? like the doubled output one? can it also be negative? is it always Percental?
        - electricity modifier ()
        - replaced input ()
        - additional output? f.e.: coffee roaster legendary provides coffee beans every 2nd production cycle, so we only need 2/3rd or even 1/2 of the buildings?
        */
        // console.log(npc);
        var ItemEffectTargets = [];
        if(Array.isArray(npc.Values.ItemEffect.EffectTargets.Item)) {
            npc.Values.ItemEffect.EffectTargets.Item.forEach(function(ItemEffectTarget) {
                ItemEffectTargets.push(Number.parseInt(ItemEffectTarget.GUID));
            });
        } else {
            ItemEffectTargets.push(Number.parseInt(npc.Values.ItemEffect.EffectTargets.Item.GUID));
        }

      // console.log(npc);
      // console.log(npc.Values.Text.LocaText);
        var ItemName = npc.Values.Text.LocaText.English.Text;
        
        var ReplacedInputs = [];
        var AdditionalOutputs = [];
        var OutputAmountFactorUpgrade = [];

        try {
            if(npc.Values.FactoryUpgrade.OutputAmountFactorUpgrade) {
                OutputAmountFactorUpgrade.push({
                    Value: Number.parseInt(npc.Values.FactoryUpgrade.OutputAmountFactorUpgrade.Value),
                    Percental: Boolean(npc.Values.FactoryUpgrade.OutputAmountFactorUpgrade.Value)
                });
            }
        } catch(error) {
            if(! error instanceof TypeError) {
                throw error;
            }
        }

        try {
            // Collect additional outputs
            if(Array.isArray(npc.Values.FactoryUpgrade.AdditionalOutput.Item)) {
                npc.Values.FactoryUpgrade.AdditionalOutput.Item.forEach(function(AdditionalOutputItem) {
                    AdditionalOutputs.push({
                        Product: Number.parseInt(AdditionalOutputItem.Product),
                        AdditionalOutputCycle: Number.parseInt(AdditionalOutputItem.AdditionalOutputCycle),
                        Amount: Number.parseInt(AdditionalOutputItem.Amount)
                    });
                });
            } else {
                AdditionalOutputs.push({
                    Product: Number.parseInt(npc.Values.FactoryUpgrade.AdditionalOutput.Item.Product),
                    AdditionalOutputCycle: Number.parseInt(npc.Values.FactoryUpgrade.AdditionalOutput.Item.AdditionalOutputCycle),
                    Amount: Number.parseInt(npc.Values.FactoryUpgrade.AdditionalOutput.Item.Amount)
                });
            }
        } catch(error) {
            if(! error instanceof TypeError) {
                throw error;
            }
        }

        try {
            // Collect replaced inputs
            if(Array.isArray(npc.Values.FactoryUpgrade.ReplaceInputs.Item)) {
                npc.Values.FactoryUpgrade.ReplaceInputs.Item.forEach(function(ReplaceInputsItem) {
                    ReplacedInputs.push({
                        OldInput: Number.parseInt(ReplaceInputsItem.OldInput),
                        NewInput: Number.parseInt(ReplaceInputsItem.NewInput)
                    });
                });
            } else {
                ReplacedInputs.push({
                    OldInput: Number.parseInt(npc.Values.FactoryUpgrade.ReplaceInputs.Item.OldInput),
                    NewInput: Number.parseInt(npc.Values.FactoryUpgrade.ReplaceInputs.Item.NewInput)
                });
            }
        } catch(error) {
            if(! error instanceof TypeError) {
                throw error;
            }
        }

        if(OutputAmountFactorUpgrade.length || AdditionalOutputs.length || ReplacedInputs.length) {
            Items.push({
                ID: Number.parseInt(npc.Values.Standard.GUID),
                Name: ItemName,
                ItemEffectTargets: GetFactoryIDs(ItemEffectTargets),
                OutputAmountFactorUpgrade: OutputAmountFactorUpgrade,
                AdditionalOutputs: AdditionalOutputs,
                ReplacedInputs: ReplacedInputs
            });
        }

    });

    fs.writeFileSync('items.json', JSON.stringify(Items));
});

xml.start();
