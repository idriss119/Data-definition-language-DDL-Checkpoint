//Création de la table custommer
CREATE TABLE CUSTOMER (
    CustomerID VARCHAR2(20) PRIMARY KEY,
    CustomerName VARCHAR2(20)
    CustommerTel Number
);

//Création de la table PRODUCT
CREATE TABLE PRODUCT (
    ProductID VARCHAR2(20) PRIMARY KEY
    ProductName VARCHAR2(20)
    Price Number
);

//Création de la table ORDERS
CREATE TABLE ORDERS (
    CustomerID VARCHAR2(20) Foreign KEY
    ProductID VARCHAR2(20)  Foreign KEY
    Quantity Number
    Total_amount Number
);
//Add a column Category (VARCHAR2(20)) to the PRODUCT table.  
ALTER TABLE PRODUCT ADD Category  VARCHAR2(20);

//Add a column OrderDate (DATE)  to the ORDERS table which have SYSDATE as a default value.
ALTER TABLE ORDERS ADD  OrderDate (DATE) DEFAULT VALUE 'SYSDATE'   