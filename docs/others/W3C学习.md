# W3C

> 万维网联盟

## 结构标准语言

1. 可扩展标记语言 ----XML

   - 宗旨：传输和存储数据

   - 特点：

     - 没有预定义标签

     - 必须有关闭标签

     - 对大小写敏感

     - 属性值必须加引号

     - 实体符号必须引用

       ![image-20200811141701123](D:\总结笔记\image-20200811141701123.png)

     - 空格会保留

   - 结构：

     ```
     <?xml version="1.0" encoding="UTF-8"?>
     <root> //必须包含根元素
     <child>
     <subchild>.....</subchild>
     </child>
     </root>
     ```

   - DTD

     - 定义xml结构

     ```
     <!DOCTYPE root
     [
     <!ELEMENT root (child,subchild)>
     <!ELEMENT child (#PCDATA)>
     <!ELEMENT subchild (#PCDATA)>
     ]>
     ```

   - Schema

     ```
     <xs:element name="root">
     <xs:complexType>
     <xs:sequence>
     <xs:element name="child" type="xs:string"/>
     <xs:element name="subchild" type="xs:string"/>
     </xs:sequence>
     </xs:complexType>
     </xs:element>
     ```

   - XMLHttpRequest对象

     - 在后台与服务器交换数据

   - XML解析器

   - XML DOM

     - document.getElementById("to").innerHTML=
       xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;

   

2. 可扩展超文本编辑语言 ----XHTML

   - 特点：
     - XHTML 元素必须被正确地嵌套。
     - XHTML 元素必须被关闭。
     - 标签名必须用小写字母。
     - XHTML 文档必须拥有根元素

## 表现标准语言

- 层叠样式表 ----CSS(2,3)

## 行为标准

1. 文档对象模型 ----DOM
2. ECMASscript