var ���� = "#fUI/StatusBar/BtChat/normal/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t  #e��ӭ����#r����ð�յ� #k!#n\r\n"
            text += "#b�ر�ע�⣺�����뿴Ⱥ�ļ�������ָ��˵�����������Ҫ\r\n\r\n"//3
            text += "#r1.��������-���-���ʣ�5��#l\r\n\r\n"//3
            text += "#r2.������ֹʹ��GM�����޸��ʺźͽ�ɫ��Ϣ�������ʺŻ��ɫ�ͻᱻ���÷���������±�������ע�⣡#l\r\n\r\n"//3
            text += "#r3.��������Ѿ����ŵ����ı�������ע����գ�#l\r\n\r\n"//3
            text += "#r4.Ŀǰֻ����ְҵ��սʿ.ħ��ʦ.������.����.����\r\n(��ʿ�ź�ս���޸��������ݣ���������)#l\r\n\r\n"//3
            text += "#r3.�޸�����+����+���ֹ��ܣ��������ˡ���������ϵ���趨#l\r\n\r\n"//3
          //  text += "#r6.�����˺�ֻ��������Ϸ���溰����Ⱥ�﷢������Ϣ��һ��TȺ���ҷ���˺ţ���˵��������#l\r\n\r\n"//3
            text += "#r4.���ּ�����������������ϵ�"+ ���� +"��ť���ɽ������#l\r\n\r\n"//3
            text += "#r5.��ӭ�������ǵĻ��ɵ���Ⱥһ�����ۣ�QQȺ542123915#l\r\n\r\n"//3
            cm.sendOk(text);
            cm.����(3,"��ӭ���ˣ������ף�ذɣ�����~����һ�����˼����˻���ð�յ�~��");
		    cm.dispose();
		}
    }
}

