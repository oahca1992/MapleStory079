//odinms_MS
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r��������#bϵ��#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getMeso() + "\r\n====================================================\r\n#k���ã���ӭ����#b�Ѻʹ�ë������#k����������ҽ��#rë��#k\r\n#k#r#e˽�¸����㣬����������ҽ����ʵ������˭����Ϊ��Ǯ��ʵ��ʵ˵�Ҿ����������ˣ���������ȫ����168��װ����#n\r\n\r\n#L1##r#e����Ϊ�Ҳ�֪����ĳ�����ǧ����#n#k\r\n\r\n#L2#���ѩ�⣨ȫ����168==#r168��#k#v4000313#��#n\r\n\r\n#L3#èͷӥ��ȫ����168==#r168��#k#v4000313#��#n\r\n\r\n#L4#����ʹ��ף����ȫ����168==#r168��#k#v4000313#��#n\r\n\r\n#L5#�ݱ˵�����������ȫ����168==#r168��#k#v4000313#��#n\r\n\r\n#L6#��������֮�Ͷ�����ȫ����168==#r168��#k#v4000313#��#n\r\n\r\n#L7#�������ף�ȫ����168==#r168��#k#v4000313#��");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("          \t\t\t#e#b��ɵ���������#n#d\r\n====================================================#k\r\n�Ǻǣ��ҳ���ǧҲ����һ�������ˣ�˭��˭������#d\r\n====================================================#k\r\n����Ҵ��ˣ�ǧ������ĺľ���٣��������ӣ��Ҹ�����һ�����ܣ���������������������#d\r\n====================================================#k\r\nǰЩ����ȥ���棬������ž�Ȼ����������ֻ#r��ɵ���#k������Ļ�ɰ�����ţ����ҵĳ��涼�����ˡ�����\r\n====================================================#k\r\n���ˣ��������������⣬Ҫ��Ҫ��������������߰ɣ�#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e��ϲ�����ȫ����168�����ѩ��.");
                cm.gainItem(1012072,168,168,168,168,168,168,30,30,0,0,30,30,10,10);
                cm.gainItem(4000313,-168);
                cm.����(3,"������word�磡����ϲ�������ȫ����168�����ѩ�⣡��");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e��ϲ�����ȫ����168��èͷӥ.");
                cm.gainItem(1022047,168,168,168,168,168,168,30,30,0,0,30,30,10,10);
                cm.gainItem(4000313,-168);
                cm.����(3,"������word�磡����ϲ�������ȫ����168��èͷӥ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e��ϲ�����ȫ����168�İ���ʹ��ף��.");
                cm.gainItem(1112663,168,168,168,168,168,168,30,30,0,0,30,30,10,10);
                cm.gainItem(4000313,-168);
                cm.����(3,"������word�磡����ϲ�������ȫ����168�İ���ʹ��ף������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e��ϲ�����ȫ����168���ݱ˵���������.");
                cm.gainItem(1122007,168,168,168,168,168,168,30,30,0,0,30,30,10,10);
                cm.gainItem(4000313,-168);
                cm.����(3,"������word�磡����ϲ�������ȫ����168���ݱ˵�������������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e��ϲ�����ȫ����168����������֮�Ͷ���.");
                cm.gainItem(1032082,168,168,168,168,168,168,30,30,0,0,30,30,10,10);
                cm.gainItem(4000313,-168);
                cm.����(3,"������word�磡����ϲ�������ȫ����168����������֮�Ͷ�������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,168)){
                cm.sendOk("#r#e��ϲ�����ȫ����168�Ĺ�������.");
                cm.gainItem(1082002,168,168,168,168,168,168,30,30,0,0,30,30,10,10);
                cm.gainItem(4000313,-168);
                cm.����(3,"������word�磡����ϲ�������ȫ����168�Ĺ������ף���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  
             }
	}
    }
}