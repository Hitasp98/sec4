var mysql = require('mysql');

var con = require('./config')
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //Todo:create DataBase
  //   con.query("CREATE DATABASE Model_Data", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
  ///////////////////////////////////////
  //Todo:create Table
  var sql = []
  sql.push("CREATE TABLE tblCommonBaseType (CommonBaseTypeId INT AUTO_INCREMENT PRIMARY KEY NOT NULL, BaseTypeTitle VARCHAR(800) UNIQUE NOT NULL, BaseTypeCode VARCHAR(3) UNIQUE)");
  sql .push("CREATE TABLE tblCommonBaseData( CommonBaseDataId INT AUTO_INCREMENT PRIMARY KEY NOT NULL, BaseCode VARCHAR(6) UNIQUE, BaseValue VARCHAR(800), CommonBaseTypeID INT,CONSTRAINT fk_CommonBaseData FOREIGN KEY (CommonBaseTypeID)REFERENCES tblCommonBaseType(CommonBaseTypeId) )")
  sql.push("CREATE TABLE tblCharityAccounts( CharityAccountId INT PRIMARY KEY NOT NULL, BankId INT NOT NULL, BranchName VARCHAR(500) NOT NULL, OwnerName VARCHAR(1000) NOT NULL, CardNumber VARCHAR(20), AccountNumber VARCHAR(10) UNIQUE, AccountName VARCHAR(500),CONSTRAINT  fk_CharityAccount FOREIGN KEY(BankId) REFERENCES tblCommonBaseData(CommonBaseDataId) )")
  sql.push("CREATE TABLE tblPersonal( PersonId INT PRIMARY KEY NOT NULL, NAME VARCHAR(500) NOT NULL, Family VARCHAR(500) NOT NULL, NationalCode VARCHAR(10), IdNumber VARCHAR(10), sex BOOLEAN NOT NULL DEFAULT FALSE, BirthDate VARCHAR(10), BirthPlace VARCHAR(500), PersonType TINYINT NOT NULL, PersonPhoto BLOB, SecretCode VARCHAR(20) )")
  sql.push("CREATE TABLE tblNeedyAccounts(NeedyAccountId INT PRIMARY KEY NOT NULL,BankId INT NOT NULL,NeedyId INT NOT NULL UNIQUE,OwnerName VARCHAR(1000) NOT NULL,CardNumber VARCHAR(20),AccountNumber VARCHAR(10) NOT NULL UNIQUE,AccountName VARCHAR(500),ShebaNumber VARCHAR(26) UNIQUE,CONSTRAINT Fk_NeedyAccounts FOREIGN KEY(NeedyId) REFERENCES tblPersonal(PersonId),CONSTRAINT Fk_NeedyAccountsBank FOREIGN KEY(BankId) REFERENCES tblCommonBaseData(CommonBaseDataId))")
  sql.push("CREATE TABLE tblPlans(PlanId INT PRIMARY KEY NOT NULL,PlanName VARCHAR(1000) NOT NULL UNIQUE,Description TEXT,PlanNature BOOLEAN DEFAULT TRUE NOT NULL UNIQUE,ParentPlanId INT UNIQUE,icon BLOB,Fdate VARCHAR(10),Tdate VARCHAR(10) UNIQUE,neededLogin BOOLEAN DEFAULT FALSE,CONSTRAINT fk_Plans FOREIGN KEY(ParentPlanId) REFERENCES tblPlans(PlanId))")
  sql.push("CREATE TABLE tblAssignNeedyToPlans(AssignNeedyPlanId INT PRIMARY KEY NOT NULL,NeedyId INT NOT NULL UNIQUE,PlanId INT NOT NULL UNIQUE,Fdate VARCHAR(10) NOT NULL,Tdate VARCHAR(10) NOT NULL,CONSTRAINT fk_AssignNeedy FOREIGN KEY(NeedyId) REFERENCES tblPersonal(PersonId),CONSTRAINT fk_AssignNeedyPlan FOREIGN KEY(PlanId) REFERENCES tblPlans(PlanId))")
  sql.push("CREATE TABLE tblCashAssistanceDetail( CashAssistanceDetailId INT PRIMARY KEY NOT NULL,  AssignNeedyPlanId INT UNIQUE,  PlanId INT NOT NULL UNIQUE,  NeededPrice DECIMAL(19, 3) NOT NULL, MinPrice DECIMAL(19, 3), Description TEXT,CONSTRAINT fk_CashAssistanceNeedyPlan FOREIGN KEY(AssignNeedyPlanId) REFERENCES tblAssignNeedyToPlans(AssignNeedyPlanId),CONSTRAINT fk_CashAssistancePlan FOREIGN KEY(PlanId) REFERENCES tblPlans(PlanId))")
  sql.push("CREATE TABLE tblPayment( PaymentId INT PRIMARY KEY NOT NULL, DonatorId INT, CashAssistanceDetailId INT NOT NULL, PaymentPrice DECIMAL(19, 3) NOT NULL, PaymentGatewayId VARCHAR(10), PaymentDate DATE NOT NULL, PaymentTime TIME NOT NULL, PaymentStatus VARCHAR(500) NOT NULL, SourceAccoutNumber VARCHAR(10), TargetAccountNumber VARCHAR(10) NOT NULL, CharityAccountId INT NOT NULL, FollowCode VARCHAR(10), NeedyId INT, CONSTRAINT Fk_PaymentDonator FOREIGN KEY(DonatorId) REFERENCES tblPersonal(PersonId), CONSTRAINT Fk_PaymentNeedy FOREIGN KEY(NeedyId) REFERENCES tblPersonal(PersonId), CONSTRAINT Fk_PaymenyCashAssistance FOREIGN KEY(CashAssistanceDetailId) REFERENCES tblCashAssistanceDetail(CashAssistanceDetailId), CONSTRAINT Fk_PaymentCharityAccount FOREIGN KEY(CharityAccountId) REFERENCES tblcharityaccounts(CharityAccountId) )")
  for (i=0;i<sql.length;i++){
  con.query(sql[i], function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });}
  ///////////////////
});