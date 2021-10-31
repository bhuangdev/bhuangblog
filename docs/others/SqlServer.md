# Sql Server总结

## sql server证书加密解密

1. 
use dbname;
--创建master key
CREATE MASTER KEY ENCRYPTION BY PASSWORD ='password';
2. 
use dbname;
--创建证书
CREATE CERTIFICATE 证书名字 
with SUBJECT = 'Certificate'
GO
3. 
use dbname;
--由证书加密对称密钥
CREATE SYMMETRIC KEY 密钥名字
    WITH ALGORITHM = AES_256
    ENCRYPTION BY CERTIFICATE 证书名字;
GO
4. 
use dbname;
--打开对称密钥
OPEN SYMMETRIC KEY 密钥名字 DECRYPTION BY CERTIFICATE 证书名字;


参考博客：https://www.cnblogs.com/wolfocme110/p/4016035.html

## sql行转列

max(case when xx then xx else xx end) as 新列名


## EF转为sql

```
IDictionary<int, int> IInvoice.GetInvoiceIdsByUserId(Guid userId)
{
    using (var context = new eFileForBusiness_DEVEntities())
    {
        ((IObjectContextAdapter)context).ObjectContext.CommandTimeout = DBUtils.CommandTimeout;

        context.Database.Log = x => logger.Trace(x.Replace(Environment.NewLine, string.Empty));

        var InvoiceIds = context.UserForms
            .Where(x => x.UserId.Equals(userId) && (x.FormStatus.Equals("B") || x.FormStatus.Equals("T")))
            .GroupBy(x => x.InvoiceId)
            .Select(x => x.FirstOrDefault()).ToList().Where(x => x.InvoiceId > 0)
            .Select(x => { return new { id = x.InvoiceId ?? 0 }; })
            .OrderByDescending(i => i.id);

        return InvoiceIds.ToDictionary(x => x.id, x => x.id);
    }
}

IDictionary<int, int> IInvoice.GetInvoiceIdsByUserId(Guid userId)
{
    using (var context = new eFileForBusiness_DEVEntities())
    {
        ((IObjectContextAdapter)context).ObjectContext.CommandTimeout = DBUtils.CommandTimeout;
        context.Database.Log = x => logger.Trace(x.Replace(Environment.NewLine, string.Empty));
    }

    DataTable dt = new DataTable();
    SqlDataReader InvoiceIds = null;
    var paramSet = new SqlParameter[1];
    paramSet[0] = new SqlParameter("@UserId", userId);
    using (InvoiceIds = DBUtils.ExecuteReader(this.DBConnString, CommandType.Text, "select distinct invoiceid from invoice where userId = @UserId", paramSet))
    {
        if (InvoiceIds != null)
        {
            dt.Load(InvoiceIds);
        }
    }

    return dt.Rows.Cast<DataRow>().ToDictionary(x => Convert.ToInt32(x[0].ToString()), x => Convert.ToInt32(x[0].ToString()));
}
```

## Sql实现多选查询

场景：报表，筛选条件，根据studentname来查询学生所上课程信息，要求可多选学生，可全选，可单选

查询信息的存储过程（）：

IF Object_id('tempdb..#StudentName') IS NOT NULL
DROP TABLE #StudentName
Select * INTO #StudentName FROM dbo.Split(@StudentName,',')
//新建临时表，每次执行时判断若不为空则删除表，再建
临时表  内容from function

select Uname,max(case when Cname = '烦人的T-SQL' then joinornot else 0 end) as '烦人的T-SQL',
			 max(case when Cname = 'Android & iOS 与 Asp.net的那点事儿' then joinornot else 0 end) as 'Android & iOS 与 Asp.net的那点事儿',
			 max(case when Cname = '使用Autofac实现控制反转和依赖注入' then joinornot else 0 end) as '使用Autofac实现控制反转和依赖注入',
			 max(case when Cname = '手机测试基础' then joinornot else 0 end) as '手机测试基础',
			 max(case when Cname = '微信小程序开发入门' then joinornot else 0 end) as '微信小程序开发入门',
			 max(case when Cname = '深入浅出机器学习-神经网络' then joinornot else 0 end) as '深入浅出机器学习-神经网络',
			 max(case when Cname = '前端的响应式编程基础' then joinornot else 0 end) as '前端的响应式编程基础',
			 max(case when Cname = 'CSS3新特性介绍' then joinornot else 0 end) as 'CSS3新特性介绍',
			 max(case when Cname = 'AR for Android – Tango Introduction' then joinornot else 0 end) as 'AR for Android – Tango Introduction',
			 max(case when Cname = 'ES6 语法的深入讲解' then joinornot else 0 end) as 'ES6 语法的深入讲解',
			 max(case when Cname = 'C#.NET中级技术培训' then joinornot else 0 end) as 'C#.NET中级技术培训',
			 max(case when Cname = '使用Vue开发简单的SPA' then joinornot else 0 end) as '使用Vue开发简单的SPA',
			 max(case when Cname = 'T-SQL存储过程最佳实践' then joinornot else 0 end) as 'T-SQL存储过程最佳实践',
			 max(case when Cname = 'Vue 中级' then joinornot else 0 end) as 'Vue 中级',
			 max(case when Cname = '自动化测试入门' then joinornot else 0 end) as '自动化测试入门',
			 max(case when Cname = 'C#.NET基础' then joinornot else 0 end) as 'C#.NET基础',
			 max(case when Cname = 'PMP考试介绍及经验分享' then joinornot else 0 end) as 'PMP考试介绍及经验分享',
			 max(case when Cname = 'Kanban - Introduction' then joinornot else 0 end) as 'Kanban - Introduction',
			 max(case when Cname = '自动化测试之页面元素定位' then joinornot else 0 end) as '自动化测试之页面元素定位',
			 max(case when Cname = 'Test Case Design' then joinornot else 0 end) as 'Test Case Design',
			 max(case when Cname = 'Solution Best Practices' then joinornot else 0 end) as 'Solution Best Practices',
			 max(case when Cname = 'EF Core' then joinornot else 0 end) as 'EF Core',
			 max(case when Cname = '1' then joinornot else 0 end) as '1',
			 max(case when Cname = 'asad' then joinornot else 0 end) as 'asad',
			 max(case when Cname = '数据库新时代  - 拥抱开源' then joinornot else 0 end) as '数据库新时代  - 拥抱开源',
			 max(case when Cname = '数据库新时代 - 拥抱开源' then joinornot else 0 end) as '数据库新时代 - 拥抱开源',
			 max(case when Cname = '数据库新时代 拥抱开源' then joinornot else 0 end) as '数据库新时代 拥抱开源',
			 max(case when Cname = '数据库新时代拥抱开源' then joinornot else 0 end) as '数据库新时代拥抱开源',
			 max(case when Cname = 'NL – India Culture' then joinornot else 0 end) as 'NL – India Culture',
			 max(case when Cname = 'DEVOPS 入门 （持续集成，持续部署实践） ' then joinornot else 0 end) as 'DEVOPS 入门 （持续集成，持续部署实践） ',
			 max(case when Cname = '可复制的领导力' then joinornot else 0 end) as '可复制的领导力',
			 max(case when Cname = 'MES基础培训' then joinornot else 0 end) as 'MES基础培训',count(Uname) Rowtotal
from ShowAllStuCourse ssc

where Uname in (SELECT * FROM #StudentName)


and ssc.CourseStartDate >= @FromDate
and ssc.CourseStartDate < dateadd(day,1,@ToDate)
group by Uname
having count(Uname) >=1 

END





CREATE FUNCTION [dbo].[Split]   //函数名称（@参数名 参数的数据类型）
(

	@String nvarchar(max), 
	
	@Delimiter VARCHAR(5) 

)

RETURNS  @SplittedValues TABLE  //返回返回值的数据类型       //table 存储结果集，供稍后处理
(

	SplitValue VARCHAR(200) 

)

AS
BEGIN    //函数体

	DECLARE @SplitLength INT 
	
	WHILE LEN(@String) > 0     //LEN()函数返回文本字段中值得长度
	
	BEGIN
	
		SELECT @SplitLength = (
		
			CASE CHARINDEX(@Delimiter,@String)    //返回@Delimiter在@String中的起始位置，默认从第一位开始
			
			WHEN 0              //单选
			
			THEN   LEN(@String)   
			
			ELSE CHARINDEX(@Delimiter,@String) -1 
			
			END
		
		) 
		
		INSERT INTO @SplittedValues 
		
		SELECT SUBSTRING(@String,1,@SplitLength)     //截取字符串@String，从第1位开始，截取@SplitLength长
		
		SELECT @String = (
		
			CASE (LEN(@String) - @SplitLength) 
			
			WHEN 0 
			
			THEN   '' 
			
			ELSE  RIGHT(@String, LEN(@String) - @SplitLength - 1)     //RIGHT函数，返回字符串从右边开始指定个数的字符
			
			END
		) 
	
	END
	
	RETURN

END
