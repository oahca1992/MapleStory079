/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Magician Job Instructor
*/

var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;

			if (cm.haveItem(4031011)) {
				if (status == 0)
					cm.sendNext("#d#e哦哟，你是#b达克鲁#k#d介绍来的吗？");
				else if (status == 1)
					cm.sendNextPrev("#d#e所以你现在是要证明你的实力吗？很好,我欣赏你...");
				else if (status == 2)
					cm.sendNextPrev("#d#e我可以给你考验的机会,请你自己把握.");
				else if (status == 3)
					cm.sendYesNo("#d#e请打败考验场的怪物收集#r30个黑珠#d给我,这样才能完成测试,祝你好运.");
				else if (status == 4) {
					cm.warp(108000400, 0);
					cm.dispose();
				}
			} else {
				cm.sendOk("#d#e很抱歉,我需要#b达克鲁的信件#k,请去找达克鲁拿取谢谢");
				cm.dispose();
			}
    }
}	