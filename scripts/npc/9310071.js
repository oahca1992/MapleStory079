/*
*   交换商店，增强版  NPC
*   By: ZreHy_MS               如果需要改动，请自行修改，本人开服用的~
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("您好，尊敬的 #b#h ##k, 我是怀旧冒险岛的#r兑换系统#k负责人\r\n\r\n\n#L3#10张#d#v4001126##d=====#r100点券#n#l#k\r\n#L1#1张#d#v4000313##d=====#r20W金币#n#l#k\r\n#L2#100张#d#v4001126##d=====#r1,000点券#k#n#l\r\n#L4#10张#d#v4000313##d======#r200W金币#n#l#k\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getMeso() >= 1000000){
                cm.sendOk("恭喜你，你获得了 100000 经验值! .");
                cm.gainMeso(-1000000);
                cm.gainExp(100000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 1000000 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.haveItem(4000313,1)){
                //cm.gainDY(100);
                cm.gainMeso(200000);
				cm.gainItem(4000313,-1);
				cm.sendOk("恭喜你，你获得了 200000 金币! .");
			        //cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10张黄金枫叶兑换3000000金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 黄金枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                cm.gainNX(1000);
				cm.gainItem(4001126,-100);
				cm.sendOk("恭喜你，你获得了 1000 点券! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100张枫叶兑换1000点卷成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001126,10)){
                //cm.gainDY(100);
                //cm.gainMeso(2000000);
				cm.gainNX(100);
				cm.gainItem(4001126,-10);
				cm.sendOk("恭喜你，你获得了 100 点券! .");
			        //cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10张枫叶兑换100点券成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000313,10)){
                //cm.gainDY(100);
                cm.gainMeso(2000000);
				cm.gainItem(4000313,-10);
				cm.sendOk("恭喜你，你获得了 2000000 金币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10张黄金枫叶兑换2000000金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 黄金枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,10)){
                //cm.gainDY(100);
                cm.gainMeso(3000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("恭喜你，你获得了 3000000 金币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10只黄金猪猪兑换3000000金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 黄金猪猪，我不能给你换购~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4001126,-100);
				cm.sendOk("恭喜你，你获得了 10张黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100张枫叶兑换10张黄金枫叶成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("恭喜你，你获得了 2000000 经验值! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 10000000 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 8: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("恭喜你，你获得了 50000000 经验值! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 1亿 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}