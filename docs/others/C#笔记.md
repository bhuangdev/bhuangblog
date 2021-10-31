# C#历史笔记

## 零散知识点

### 关于类
DynamicForm  类与结构的区分  类类型的对象通过引用传递  结构类型的对象按值传递
包含成员：字段、常量、方法、属性、构造函数、索引器、运算符、事件、析构函数、类型

·实例化对象----> var 实例化对象名 = new 类名();

### 字段：类型的变量   

·访问字段----> 实例化对象名.字段名 =“xx”；  

### 属性：一个方法或一对方法，看起来是一个字段

·只包含get set----> public int 属性名(get; set;)

函数>方法   
函数成员不仅包含方法，也包含类或结构的一些非数据成员


Response.Redirect("/xx/xxx.aspx"); 重定向页面
Authenticated 身份验证
request[]获取参数
Contains 判断某字符串中是否包含某一字符串
IEnumerable<T> 数据查询返回对象       状态机，里面维护着T对象的状态迭代
parameters.FormId ?? 0, parameters.FormType, parameters.Year
---??---如果此运算符的左操作数不为null，则此运算符将返回左操作数，否则返回右操作数。
---int?---可空类型
Convert.Toxxx();    //类型转换


### 关于泛型
延迟声明------->泛型举例

一般：
public static void ShowObject(object oParameter)
{
       Console.WriteLine("This is {0},parameter={1},type={2}",
       typeof(CommonMethod), oParameter.GetType().Name, oParameter);
}

泛型：
public static void Show<T>(T tParameter)
{
    Console.WriteLine("This is {0},parameter={1},type={2}",
       typeof(GenericMethod), tParameter.GetType().Name, tParameter.ToString());
}

typeoff:为了获取某个实例具体引用的数据类型System.Type

RelayCommand(() => this.AddPerson(), () => this.CanAddPerson());  的意思可以翻译为
·RelayCommand(参数一, 参数二);
·参数一 ：() => this.AddPerson()
·参数二 ：() => this.CanAddPerson()

() => this.AddPerson() 的意思是 一个没有参数的方法，返回 this.AddPerson() 而这个返回值的类型不用指定 系统会自动判断


{new Tuple<int, string>(TaxYears._2019, FormTypeNames.Form1099Misc), () => new _2019._1099MiscValidatorBase()}
元组有些对象的集合
最大的用处就是，不用为了一些简单的结构或对象而去新建一个类了

### 关于Regex
//Regex.IsMatch();//用来判断给定的字符串是否匹配某个正则表达式
//Regex.Match();//用来从给定的字符串中按照正则表达式的要求提取【一个】匹配的字符串
//Regex.Matches();//用来从给定的字符串中按照正则表达式的要求提取【所有】匹配的字符串
//Regex.Replace(); //替换所有正则表达式匹配的字符串为另外一个字符串。


### 关于Add
Add 是每次将单个元素添加到集合里面。
但是AddRange可以一次性添加多个元素到集合里面

### 关于 ？
	• x?y:z 表示如果表达式x为true，则返回y；如果x为false，则返回z
	• a??b 当a为null时则返回b，a不为null时则返回a本身
	• int? 表示可空的整形，DateTime? 表示可为空的时间
		○ int？ iNullale = 100;   <==>   System.Nullable<int> iNullable1 = 100;



### 关于重写、重载与覆写
override重写  在子类中重写父类中的方法，两个函数的函数特征（函数名，参数类型和个数）相同
1.重写基方法必须具有与override方法相同的签名。 
2.override声明不能更改virtual方法的可访问性，且override方法与virtual方法必须具有相同级别访问修饰符。 
3.不能用new、static、virtual修饰符修改override方法。 
4.重写属性声明必须指定与继承的属性完全相同的访问修饰符、类型和名称。 
5.重写的属性必须是virtual、abstract或override。 
6.不能重写非虚方法或静态方法。 
7.父类中有abstract，那么子类同名方法必定有override，若父类中有 virtual方法，子类同名方法不一定是override，可能是overload。 
8.override必定有父子类关系。


overload重载  在同一个类中方法名相同、参数或返回值不同的多个方法
1.出现在同一个类中。 
2.参数列表不同或返回类型和参数列表都不同，只有返回类型不同不能重载。(参数列表包括参数个数和参数类型)

overwrite覆写 用new实现，在子类中用new关键字修饰定义的与父类中同名的方法，也称为覆盖，覆盖不会改变父类方法的功能



### 关于virtual与abstract
共同点：用来修饰方法不能是private
区别：
	• virtual修饰的方法必须有实现
	abstract修饰的方法一定不能实现
	
	• virtual可以被子类重写（override）
	abstract必须被子类重写
	
	• 如果类成员被abstract修饰，则该类前必须加abstract，因为只有抽象类才可以有抽象方法
	
	• 无法创建abstract类的实例，只能被继承无法实例化
	
	• c#如果要在子类中重写方法，必须在父类方法前加virtual，在子类方法前加override，这样避免了在子类中不小心重写父类方法


### 判空方法
IsNullOrEmpty 判断是null还是空
IsNullOrBlank 判断是null还是空字符串
IsNullOrWhiteSpace  判断是null、空还是仅由空白字符组成
	
	
### 封装
protected：范围--->本身的class或继承它的class
Internal：范围--->程序集内



First：取序列中满足条件的第一个元素，如果没有元素满足条件，则抛出异常 
FirstOrDefault：取序列中满足条件的第一个元素，如果没有元素满足条件，则返回默认值

InvariantCultureIgnoreCase 不同区域信息下都忽略大小写
StringComparison 比较
string.CompareOrdinal(payKind, "H")      如果payKind里的字符串和“H”相同，则返回0，第一个小于第二个字符串，返回值小于零，反之大于零

C#中trim() 的功能:删除字符串首部和尾部的空格
Equals()判断是否对同一个对象的引用（即堆中的内容是否相同）


IgnoreCase 属性
设置或返回一个Boolean值，指明模式搜索是否区分大小写

Tuple元组
组元使用泛型来简化类的定义，多用于方法的返回值。在函数需要返回多个类型的时候，就不必使用out , ref等关键字了，直接定义一个Tuple类型，使用起来非常方便

()=>Lambda运算符
左边挨着的是定义，右边就是对定义的操作，并返回该定义的值

this
代表当前类的实例对象

### String.Format 方法的几种定义：
String.Format (String, Object) 将指定的 String 中的格式项替换为指定的 Object 实例的值的文本等效项。
String.Format (String, Object[]) 将指定 String 中的格式项替换为指定数组中相应 Object 实例的值的文本等效项。
String.Format (IFormatProvider, String, Object[]) 将指定 String 中的格式项替换为指定数组中相应 Object 实例的值的文本等效项。指定的参数提供区域性特定的格式设置信息。
String.Format (String, Object, Object) 将指定的 String 中的格式项替换为两个指定的 Object 实例的值的文本等效项。 
String.Format (String, Object, Object, Object) 将指定的 String 中的格式项替换为三个指定的 Object 实例的值的文本等效项。

用字符串分隔 xx.Split

lazy loading与eager loading
两种加载数据的方式没有什么好坏之分，只是从不同的角度出发适用于不同情况环境。延迟加载更具有灵活性，类似于分治法，每次加载少量数据，分多次加载。但是当主表数据数量过多时，会频繁访问数据库降低性能。预加载只要访问一次数据库就可以拿到全部的数据，放到内存中。但是当数据量很多，或者实体级联关系复杂时要特别注意性能了；实体关系复杂时EF自动生成的sql语句可能会非常复杂，这点也要特别注意。

String.Format("{0:N}", maxWage[maxWage.Length - 1]
C 或 c
货币
Console.Write("{0:C}", 2.5); //$2.50
Console.Write("{0:C}", -2.5); //($2.50)

D 或 d
十进制 数
Console.Write("{0:D5}", 25); //00025

E 或 e
科学型
Console.Write("{0:E}", 250000); //2.500000E+005

F 或 f
固定点
Console.Write("{0:F2}", 25); //25.00
Console.Write("{0:F0}", 25); //25

G 或 g
常规
Console.Write("{0:G}", 2.5); //2.5

N 或 n
数字
Console.Write("{0:N}", 2500000); //2,500,000.00

X 或 x
十六进制
Console.Write("{0:X}", 250); //FA
Console.Write("{0:X}", 0xffff); //FFFF


string.Empty不分配存储空间
""分配一个长度为空的存储空间


Enumerable.Range方法创建一个新的整数有序列表。可指定列表的起始值和项目数。


## 实体框架EF

### 官方解释EF
微软官方提供的ORM工具，让开发人员节省数据库访问的代码时间。
EF提供变更跟踪、唯一性约束、惰性加载、查询事务等

其实Entity Framework的底层也是调用Ado.Net,它是更高层次的封装.作为数据访问的技术,EntityFramework的设计有高扩展性,这一点可体现在其映射定义的灵活性.简单地说,使用Entity Framework可以充分地定义与数据库表映射的实体,这个实体可以直接用于业务逻辑层或作为服务的数据契约.使用EF后,可以将实体类的设计工作完全放在EDM的设计过程中,而不需要手工写那些大同小异的代码,令人欣喜的是这个实体模型可以在运行时修改并生效,做到一改全改.我们开发时也不用再频繁地与数据库打交道,我们操作实体模型的同时EF框架自动完成了对数据库的操作.

三种模式：
DataBase First传统的表驱动方式创建EDM，然后通过EDM生成模型和数据层代码。除生成实体模型和自跟踪实现模型，还支持生成轻型DbContext。

Model First先创建EDM模型，再生成DDL数据库脚本和模型和数据层代码。除生成实体模型和自跟踪实现模型，支持生成轻型DbContext。

Code First手动创建POCO模型，数据层DbContext及映射关系，通过Database.SetInitializer生成数据库，这种方式较灵活，但是代码工作较多。



Context.tt  用于生成的context类，它的目录下包含一个School.Context.cs 文件
Xx.tt用于生成表映射的实体类

### LINQ查询方式
例：
LINQ Query syntax:
using (var context = new SchoolDBEntities())
{
var L2EQuery = from st in context.Students
where st.StudentName == "Bill"select st;
 
var student = L2EQuery.FirstOrDefault<Student>();
}


### Entity Framework
1. 嘛是EF
	ADO.NET Entity Framework,以ADO.NET为基础发展出来的对象关系对应解决方案
    Entity Framework 是 ORMapping 的一种具体实现
2. 嘛是ORM
	ORM-- ObjectRelation Mapping , 即对象关系映射框架/数据持久化框架,是根据实体对象操作数据表中数据的一种面向对象的操作框架
3. EF开源
	https://entityframework.codeplex.com
	
Entity
1.种类 POCO 
	简单的
	复杂的
2.相互关系
3.生命周期


## LINQ查询、Lambda表达式

### Lambda表达式
lambda表达式：可用于创建委托或表达式目录树类型的匿名函数
lambda运算符=> 读作“goes to” 左边是输入参数，右边是表达式或语句块
左边输入的参数  右边对参数进行处理，之后返回结果

语句lambda
（委托与lambda表达式）
delegate void TestDelegate(string s);      //delegate是一种声明
…
TestDelegate myDel = n => { string s = n + " " + "World"; Console.WriteLine(s); };
myDel("Hello");                                             //myDel是一个方法

（LINQ语句与lambda表达式）
List<string> Citys= new List<string>()    //定义一个citys集合，初始化一些数据
{
      "BeiJing",
      "ShangHai",
      "Tianjin",
      "GuangDong"                                                        
};
var result = Citys.First(c => c.Length > 7);    //调用LINQ的First方法，查询出来长度大于7的第一个结果

如何定义和使用lambda表达式（应用）

Public void LambdaFun(string str,Func<string,string> func)
{
	Console.WriteLine(func(str));
}

LambdaFun("BeiJing 2013",s=>
		{
			If(s.Contains("2013"))
			{
				s = s.Replace("2013","2014");
			}
			return s;
			
		});
		
### LINQ查询
语言集成查询
三个不同操作组成：创建数据源、创建查询、执行查询


1）Func委托
当你想从lambda表达式返回一些东西时
使用Func<in T,out TResult> delegate  T是输入参数的类型，TResult是返回类型
2）Action委托
Action<in T> 只有输入参数，不需要返回值


LINQ其实就是对集合提供类似于sql一般的操作。



## 类型转换


### 隐式转换：  小的类型范围向大的类型范围转换，直接转换
int i = 10;
long l = i;

C1 c1 = new C2();       C1为父类，C2为子类

### 显式转换：   大的范围向小的范围转换
double d = 10.01
int iFromD = (int)d;

C1 c11 = new C1();
C2 c2 = (C2)c11;

会报错

C2 c22 = c11 as C2     //as将c11的类型转化为C2   as只能转换引用类型和空类型，不成功返回空

### 通过Method进行类型转换

string iForm1 = i.ToString();
int iForm2 = Convert.ToInt32("100");
int iForm3 = Int32.Parse("101");
int iForm4;
bool succed = Int32.TryParse("102",out iForm4);
//Iconventible.TypeConventer   实现自己的类型 转换方法

### 装箱拆箱
装箱：将值类型转变成引用类型
	不需要特别的语法，其实就是一个隐式转换
拆箱：引用类型转变为值类型

int？ 可为空类型


### 循环语句
1.for
2.foreach
	//前提是必须实现了IEumerable接口
	            List<int> listInt = new List<int>() { 1, 2, 3 , 4 , 5 };
	            foreach(int intInList in listInt)
	            {
	                Console.WriteLine(intInList);
	            }
3.while-do
4.do-while

Console.ReadLine();
            
//问题：几种循环方式分别在什么情况下用比较好？


## 集合类型

### 数组
int[] numbers = new int[5]; // 数组内容类型  数组名称  实例化  同第一个写法，加一个数组长度5
	int[] number2 = new int[5] {1,1,1,1,}/new int[] {1,1,1}/{1,1,1,}
string[,] names = new string[5, 4];//二维数组，5x4
	string[,] name2 = {{"g","k"},{"j","h"}};
byte[][] scores = new byte[5][];//数组的数组，每个维度里的值都是一个数组，但长度不定
	int[][] numbers3 = {new int[]{1,2,3.},new int[]P{4,5,6,7}};                                           通过索引获值



### 数组列表ArrayList    

非强类型

ArrayList al = new ArrayList();
//方便添加和删除数组中的元素
al.Add(5);
al.Add(100);
al.Remove(5);
foreach(var e in al)
{
    Console.WriteLine(e);
}
Console.ReadLine();

### List
推荐 List<int> intList = new List<int>(); 
intList.Add(500);  //增加
intList.AddRange(new int[] {501,502});//添加一串
Console.WriteLine(intList.Contains(200));//是否包含一个数值
Console.WriteLine(intList.IndexOf(501));//查找某个数值的位置
intList.Remove(501);//删除
intList.Insert(1,100);//插入


不通过位置访问其他成员：通过key访问---哈希表
相当于每一位都有一个对应的key(主键值)和value(对应的值)
Hashtable ht = new Hashtable();
ht.Add("first","jike");
ht.Add("second","xueyuan");
Console.WrtieLine(ht["second"]);
缺点：类型不安全

### Dictionary
弥补：用Dictionary
Dictionary<string,string> d=new Dictionary<string,string>{};

SortedList<int,int> sl = new SorteList<int,int>();//经过排序的list

stack堆栈数据集合，先进后出
queue队列，先进先出


## 逻辑语句

### 条件语句
	if语句
		& | && ||的区别
			对于&&  ||运算的对象是逻辑值，也就是True/False
			对于& |运算的对象是位，也就是1/0
		&：按位与，对两个条件都进行判断
		&&：逻辑与，只要一个条件满足，另一个条件就不会执行
		|：按位或，对两个条件都进行判断
		||：逻辑或，只要一个条件满足，另一个条件就不会执行
	switch语句


## 垃圾回收、回调Invoke

### 垃圾回收（GC）
值类型（常见类型：整形、浮点型、布尔型、枚举）
保存在Stack上，随着函数的执行作用域执行完毕而自动出栈，不是GC所关心的对象  

引用类型（常见类型：数组、字符串、接口、委托、Object等）
保存在heap上，由GC处理

拆箱：将引用类型转化为值类型
装箱：将值类型转化为引用类型

GC机制问题：
1.GC不能释放所有的资源，自动释放非托管资源
2.GC并不是实时性的，这将会造成系统性能上的瓶颈和不确定性

Then you know , what is the 托管or非托管 resource.
托管：.net可以自动进行回收资源，主要指托管堆上分匹配的内存资源
非托管：.net不知道如何回收的资源，常见为文件、窗口、网络连接、数据库连接、画刷、图标等


## 异常处理

异常处理机制
	try{
	} 
	catch{
	throw;
	} 
	finally{
}


## 异步与线程

### async
async固定线程在执行异步任务与wait Task.Run()---每次会启动一个新的线程执行Task

https://www.cnblogs.com/neverc/p/4653539.html    回去好好研究研究

sleep()可以将一个线程睡眠，参数可以指定一个时间。
而wait()可以将一个线程挂起，直到超时或者该线程被唤醒

其实两者都可以让线程暂停一段时间,但是本质的区别是一个线程的运行状态控制,一个是线程之间的通讯的问题

### sleep和wait的区别有：
1，这两个方法来自不同的类分别是Thread和Object
2，最主要是sleep方法没有释放锁，而wait方法释放了锁，使得其他线程可以使用同步控制块或者方法。
3，wait，notify和notifyAll只能在同步控制方法或者同步控制块里面使用，而sleep可以在
任何地方使用
synchronized(x){
    x.notify()
    //或者wait()
}
4,sleep必须捕获异常，而wait，notify和notifyAll不需要捕获异常


### Tips

不能在foreach里写数据库操作 频繁访问数据库不好

### webApi

构建REST-ful服务 
三种主流web服务交互方法：
REST-ful---Representational State Transfer 表征性状态传输
SOAP---Sample Object Access protocol 简单对象访问协议
XML-RPC

REST-ful
是一种网络应用程序的设计风格和开发方式，基于HTTP，可以使用XML格式定义或JSON格式定义。
RESTFUL适用于移动互联网厂商作为业务使能接口的场景，实现第三方OTT调用移动网络资源的功能，动作类型为新增、变更、删除所调用资源
