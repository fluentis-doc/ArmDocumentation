---
title: LDAP Global Configuration
sidebar_position: 5
---

![](../../../../../static/images/20250217091458.png)

**LDAP Global Configuration** è una funzionalità dell'Application Resource Manager che permette di impostare i parametri necessari per l'autenticazione tramite **Active Directory** di Windows Server.  
**Active Directory** è un sistema server centralizzato, sviluppato da Microsoft che si fonda sui concetti di dominio e di directory, ovvero un insieme di servizi di rete, gestiti da un **domain controller**. 

![](../../../../../static/images/20250217092653.png)

*La form è così composta:*  

### Ribbon menu
Il Ribbon Menu, posto in alto della form, permette all'utente di **cercare**, **creare** ed **eliminare** i record presenti presenti nella form.   

### Filtro Standard
Il filtro standard permette all'utente di filtrare i record presenti sulla form per **dominio** e/o per **server**

### Filtro Risultati
Il filtro dei risultati mostra i risultati della griglia e si compone di:
* **Domain**: è il nome principale utilizzato per identificare l'Active Directory.   
* **NetBIOS Domain**: è una versione più corta e semplice del nome del dominio.  
* **Server**: è l'hostname del server applicativo di Fluentis.   
* **Port**: è la porta Remote Desktop Protocol (RDP), di default la 389.  
* **Username**: è il nome di utente amministratore della macchina **Windows Server**.   
* **Password**: è la password relativa all'utente di cui al punto precedente.   


Per impostare il login tramite **l'Active Directory**, è **necessario**

* Aggiungere una **nuova funzionalità** al server Windows. 
* Creare un nuovo **dominio** (oppure utilizzare uno già esistente).  
* Impostare il **controller di dominio**.  
* Impostare il server **DNS**.  
* Impostare una cartella per la base di dati di **Active Directory** e i file di **log**.  

Per ulteriori approfondimenti si rimanda alla documentazione ufficiale di Microsoft al seguente [**Link**](https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/active-directory-overview).  

### Trick and Tips

Per verificare il **NetBIOS Domain** è possibile, tramite il prompt, lanciare il seguente comando:

```powershell
nltest /dsgetdc:<nome_dominio>
```

![](../../../../../static/images/20250217105506.png)  


### Login ad Arm tramite l'Active Directory  

Una volta parametrizzato l'Active Directory per l'**Application Resource Manager** è necessario creare il relativo utente per Arm.  
Si rimanda al seguente [**Link**](docs/arm/home/connections/connections-details/arm-users.md) di documentazione interna.  

Una volta parametrizzato l'utente che avrà come modalità d'accesso **Active Directory**, è sufficiente loggarsi in Arm spuntando la checkbox Sigle-Sign-On così come in figura sottostante.  
Fluentis recupererà automaticamente le informazioni di dominio.  
![](../../../../../static/images/20250217162617.png)
