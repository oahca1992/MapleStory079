var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4767)==2){
			qm.sendOk("你已经领取过奖励，继续努力到60级可以获得更多奖励喔");
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b50#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你等级达到了#r50#k级，你在怀旧冒险岛已经算是小有成就了，群主大佬为你助力送你珍贵的黄金枫叶5张\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4001126# 1000、#v4000313# 5张");
			qm.gainItem(4001126, 1000);
			qm.gainItem(4000313, 10);
			qm.forceCompleteQuest(4767);
			qm.dispose();
		} 
	}
}
