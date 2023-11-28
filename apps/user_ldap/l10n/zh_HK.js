OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "無法清除 mappings。",
    "Failed to delete the server configuration" : "刪除伺服器設定時失敗",
    "Invalid configuration: Anonymous binding is not allowed." : "無效的配置：不允許匿名綁定。",
    "Valid configuration, connection established!" : "有效的配置，連接成功!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "有效的配置，但是綁定失敗。請檢查伺服器設定和證書。",
    "Invalid configuration. Please have a look at the logs for further details." : "無效的配置。請查看日誌以獲取更多詳細訊息。",
    "No action specified" : "沒有指定操作",
    "No configuration specified" : "沒有指定配置",
    "No data specified" : "沒有指定資料",
    "Invalid data specified" : "指定的數據無效",
    " Could not set configuration %s" : "無法為 %s 設定配置值",
    "Action does not exist" : "操作不存在",
    "Renewing …" : "更新中...",
    "Very weak password" : "密碼安全性極弱",
    "Weak password" : "密碼安全性弱",
    "So-so password" : "密碼安全性普通",
    "Good password" : "密碼安全性佳",
    "Strong password" : "密碼安全性極佳",
    "The Base DN appears to be wrong" : "Base DN 出現問題",
    "Testing configuration…" : "配置測試中...",
    "Configuration incorrect" : "配置不正確",
    "Configuration incomplete" : "配置未完成",
    "Configuration OK" : "配置完成",
    "Select groups" : "選擇群組",
    "Select object classes" : "選擇物件",
    "Please check the credentials, they seem to be wrong." : "請檢查您的憑證，似乎出了點問題",
    "Please specify the port, it could not be auto-detected." : "請您指定您的連接阜，無法自動偵測",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN 無法被自動偵測，請重新設定主機，連接阜以及認證",
    "Could not detect Base DN, please enter it manually." : "無法偵測到Base DN，請手動輸入",
    "{nthServer}. Server" : "{nthServer}。伺服器",
    "No object found in the given Base DN. Please revise." : "在Base DN中找不到物件，請重新修改。",
    "More than 1,000 directory entries available." : "有 1,000 多個目錄項目可用。",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["提供的 Base DN 中有 {objectsFound} 個項目可用"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "產生錯誤。請檢查 Base DN，以及連線設定和驗證",
    "Do you really want to delete the current Server Configuration?" : "您真的要刪除現在的伺服器設定嗎？",
    "Confirm Deletion" : "確認刪除",
    "Mappings cleared successfully!" : "Mappings 清除成功!",
    "Error while clearing the mappings." : "清除 mappings 時出錯。",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "匿名是不允許的，請提供用戶DN和密碼。",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP 錯誤，不允許匿名榜定。",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "儲存失敗。 請確保數據庫處於運行狀態。 在繼續之前重新加載。",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "切換模式會使LDAP自動抓取資訊，抓取資訊的時間依您的LDAP大小而定，可能會花一點時間。您確定要切換模式?",
    "Mode switch" : "模式切換",
    "Select attributes" : "選擇屬性",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "找不到用戶。請檢查您的登入屬性和用戶名。有效過濾（複製和粘貼命令行驗證）：<br/>",
    "User found and settings verified." : "用戶存在，設定值正確。",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "如返回結果太多可考慮進一步縮小搜尋範圍，僅返回的第一個用戶可以登入。",
    "An unspecified error occurred. Please check log and settings." : "發生一個不明的錯誤‧請檢查日誌和設定。",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "搜尋過濾器無效，可能是由於語法問題引起的，例如，方括號的數量不均勻。請修改。",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "連線到 LDAP/AD 出現錯誤。請檢查主機，連接埠和身份驗證。",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "“%uid”佔位符丟失。查詢 LDAP/AD 時，它將替換為登入名稱。",
    "Please provide a login name to test against" : "請提供登入姓名以便再次測試",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "群組盒已經停用，LDAP/AD 伺服器並不支援",
    "Password change rejected. Hint: " : "密碼更改被拒絕。提示：",
    "Please login with the new password" : "請登入並使用新的密碼",
    "LDAP User backend" : "LDAP 用戶後端系統",
    "Your password will expire tomorrow." : "您的密碼將於明日過期",
    "Your password will expire today." : "您的密碼將於今日過期",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["您的密碼將於%n天後過期"],
    "LDAP/AD integration" : "LDAP /AD 整合",
    "_%n group found_::_%n groups found_" : ["找到 %n 個群組"],
    "> 1000 groups found" : "找到 > 1000 個群組",
    "> 1000 users found" : "找到 > 1000 位用戶",
    "_%n user found_::_%n users found_" : ["找到 %n 位用戶"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "無法檢測到用戶顯示名稱屬性。請在高級LDAP設置中自行指定。",
    "Could not find the desired feature" : "無法找到所需的功能",
    "Invalid Host" : "無效的 Host",
    "LDAP user and group backend" : "LDAP 用戶和群組後端系統",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "該應用程序使管理員可以將Nextcloud連接到基於LDAP的用戶目錄。",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "此應用程式讓管理員可以將 Nextcloud 連線到以 LDAP 為基礎的使用者目錄來進行驗證與提供使用者、群組與使用者屬性。管理員可以設定此應用程式來連線到一個或更多個 LDAP 目錄，或是透過 LDAP 介面的 Active Directories。如使用者配額、電子郵件、虛擬化身圖片、群組成員資格等屬性可以透過有適當查詢與過濾條件的目錄從 Nextcloud 拉取。\n\n使用者以其 LDAP 或 AD 憑證登入 Nextcloud，並根據 LDAP 或 AD 伺服器處理的身份驗證請求來授予存取權限。Nextcloud 並不儲存 LDAP 或 AD 的密碼，而是使用這些憑證來對使用者進行身份驗證，然後 Nextcloud 會使用工作階段作為使用者 ID。更多資訊在 LDAP 使用者與群組後端文件中提供。",
    "Test Configuration" : "測試此配置",
    "Help" : "支援",
    "Groups meeting these criteria are available in %s:" : "符合這些條件的群組可在 %s 找到：",
    "Only these object classes:" : "只有這些物件類別：",
    "Only from these groups:" : "僅從這些群組：",
    "Search groups" : "搜尋群組",
    "Available groups" : "可用的群組",
    "Selected groups" : "已選群組",
    "Edit LDAP Query" : "編輯LDAP Query",
    "LDAP Filter:" : "LDAP 過慮器：",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "過濾器指定哪些 LDAP 群組將有權存取 %s。",
    "Verify settings and count the groups" : "驗證設置併點算群組數目",
    "When logging in, %s will find the user based on the following attributes:" : "當登入%s時，將會根據以下屬性找到用戶 ：",
    "LDAP/AD Username:" : "LDAP/AD 用戶名稱：",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "允許使用 LDAP/AD 用戶名登入，該用戶名可以是 “uid” 或 “sAMAccountName”。",
    "LDAP/AD Email Address:" : "LDAP/AD 電郵地址：",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "允許使用電郵地址屬性登入。允許使用 “mail” 和 “mailPrimaryAddress”。",
    "Other Attributes:" : "其他屬性：",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "定義嘗試登入時要應用的過濾器。“%%uid” 取代登入時輸入的用戶名。示例：“uid = %%uid”",
    "Test Loginname" : "測試登入姓名",
    "Attempts to receive a DN for the given loginname and the current login filter" : "嘗試接收給定登錄名和當前登錄過濾器的 DN",
    "Verify settings" : "驗證設定",
    "%s. Server:" : "%s。伺服器：",
    "Add a new configuration" : "添加一個新的配置",
    "Copy current configuration into new directory binding" : "複製目前的配置到新目錄綁定",
    "Delete the current configuration" : "刪除目前的配置",
    "Host" : "主機",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "除非需要 SSL，否則可以省略該協議。如果需要 SSL，請以 ldaps:// 開頭",
    "Port" : "連接埠",
    "Detect Port" : "偵測連接埠",
    "User DN" : "用戶 DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "客戶端用戶的DN與特定字詞的連結需要完善，例如：uid=agent，dc=example，dc=com。若是匿名連接，則將DN與密碼欄位留白。",
    "Password" : "密碼",
    "For anonymous access, leave DN and Password empty." : "匿名連接時請將 DN 與密碼欄位留白",
    "Save Credentials" : "保存憑證",
    "One Base DN per line" : "一行一個 Base DN",
    "You can specify Base DN for users and groups in the Advanced tab" : "您可以在進階標籤頁裡面指定用戶及群組的 Base DN",
    "Detect Base DN" : "偵測 Base DN",
    "Test Base DN" : "測試 Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "避免自動 LDAP 請求。適合較大的設置，但需要多一些 LDAP 知識。",
    "Manually enter LDAP filters (recommended for large directories)" : "手動輸入 LDAP篩選器（建議在大型的資料環境）",
    "Listing and searching for users is constrained by these criteria:" : "列出和搜索用戶受到以下條件的約束：",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "用戶最常見的對像類是 OrganizationalPerson、person、user 和inetOrgPerson。如果不確定要選擇哪個對像類，請諮詢您的目錄管理員。",
    "The filter specifies which LDAP users shall have access to the %s instance." : "篩選起指定哪些LDAP的用戶應該擁有存取%s的權限",
    "Verify settings and count users" : "驗證設定並計算用戶數",
    "Saving" : "儲存",
    "Back" : "返回",
    "Continue" : "繼續",
    "Please renew your password." : "請更新您的密碼",
    "An internal error occurred." : "發生內部錯誤",
    "Please try again or contact your administrator." : "請重試或聯絡系統管理員",
    "Current password" : "目前密碼",
    "New password" : "新密碼",
    "Renew password" : "更新密碼",
    "Wrong password." : "密碼錯誤",
    "Cancel" : "取消",
    "Server" : "伺服器",
    "Users" : "用戶",
    "Login Attributes" : "登入的設定",
    "Groups" : "群組",
    "Expert" : "專業模式",
    "Advanced" : "進階",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>警告：</b>沒有安裝 PHP LDAP 模組，後端系統將無法運作，請要求您的系統管理員安裝模組。",
    "Connection Settings" : "連線設定",
    "Configuration Active" : "配置使用中",
    "When unchecked, this configuration will be skipped." : "沒有被勾選時，此設定會被略過。",
    "Backup (Replica) Host" : "備用主機",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "可以選擇性設定備用主機，必須是 LDAP/AD 中央伺服器的複本。",
    "Backup (Replica) Port" : "備用（複本）連接埠",
    "Disable Main Server" : "停用主伺服器",
    "Only connect to the replica server." : "只能連線至複製伺服器。",
    "Turn off SSL certificate validation." : "關閉 SSL 憑證檢查",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "不建議，請僅在測試時使用！如果連線只能在此設定下工作，請匯入LDAP伺服器的SSL認證到您的伺服器%s上",
    "Cache Time-To-Live" : "快取的存活時間",
    "in seconds. A change empties the cache." : "以秒為單位。變更後會清空快取。",
    "Directory Settings" : "目錄設定",
    "User Display Name Field" : "用戶顯示名稱欄位",
    "The LDAP attribute to use to generate the user's display name." : "LDAP設定值，用於產生用戶的顯示名稱",
    "2nd User Display Name Field" : "第二位用戶顯示名稱欄位",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "選填。要加進顯示名稱中括號的 LDAP 屬性。例如 »John Doe（john.doe@example.org）«。",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "一行一個用戶 Base DN",
    "User Search Attributes" : "用戶搜尋屬性",
    "Optional; one attribute per line" : "非必要，一行一項屬性",
    "Group Display Name Field" : "群組顯示名稱欄位",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP設定值，用於產生用戶群組的顯示名稱",
    "Base Group Tree" : "基本群組樹",
    "One Group Base DN per line" : "一行一個 Group Base DN",
    "Group Search Attributes" : "群組搜尋屬性",
    "Group-Member association" : "群組與成員之間的關聯",
    "Dynamic Group Member URL" : "動態組成員URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "群組對像的 LDAP 屬性包含一個 LDAP 搜索URL，該URL確定哪些對象屬於該群組。（空白設置將禁用動態群組成員資格功能。）",
    "Nested Groups" : "嵌套群組",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "啟用後，將支持組內組。（僅在組成員屬性包含DN時有效。）",
    "Paging chunksize" : "分頁塊大小",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "分頁 LDAP 搜尋所用的 chunksize 可能會返回大量結果，例如用戶或組枚舉。（在這種情況下，將其設置為0會禁用分頁 LDAP 搜尋。）",
    "Enable LDAP password changes per user" : "啟用每個用戶的LDAP密碼更改",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "允許 LDAP 用戶更改其密碼，並允許超級管理員和群組管理員更改其 LDAP 用戶的密碼。僅當在 LDAP 伺服器上相應配置了存取控制控制策略時，該選項才起作用。由於密碼以明文形式發送到 LDAP 伺服器，因此必須使用傳輸加密，並且應該在 LDAP 伺服器上配置密碼 hashing。",
    "(New password is sent as plain text to LDAP)" : "（新密碼以純文本格式發送到LDAP）",
    "Default password policy DN" : "默認密碼策略DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "默認的DN 密碼過期處理策略。僅當啟用了單個用戶 LDAP 密碼更改且僅OpenLDAP支持此功能時，此方法才有效。留空以禁用密碼過期處理。",
    "Special Attributes" : "特殊屬性",
    "Quota Field" : "配額欄位",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "將用戶的默認配額留空。否則，請指定 LDAP/AD 屬性。",
    "Quota Default" : "默認配額",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "覆蓋沒有在“配額”字段中設置配額的 LDAP 用戶的默認配額。",
    "Email Field" : "電郵地址欄位",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "使用用戶的 LDAP 屬性去設置其電郵地址。留空 = 使用默認值。",
    "User Home Folder Naming Rule" : "用戶家目錄的命名規則",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "用戶名留空（默認）。否則，請指定 LDAP/AD 屬性。",
    "\"$home\" Placeholder Field" : "\"$home\" 佔位符字段",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "外部存儲配置中的 $home 將替換為指定屬性的值",
    "Internal Username" : "內部用戶名稱",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "默認情況下，內部使用者名稱將從 UUID 屬性建立。其確保了使用者名稱是唯一且不需要轉換字元。內部使用者名稱的限制是只能使用下列字元：[a-zA-Z0-9_.@-]。其他字元會使用其 ASCII 對映或被忽略。發生碰撞時，將會加入數字。內部使用者名稱用於內部識別使用者。其也是使用者家資料夾的預設名稱。也是遠端 URL 的一部分，舉例來說，會用於所有 *DAV 服務。使用此設定，預設的行為將會被覆寫。變更僅對新映射（新增）的 LDAP 使用者有效。將其留空會使用預設行為。",
    "Internal Username Attribute:" : "內部用戶名稱屬性：",
    "Override UUID detection" : "偵測覆寫UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "預設情況下，UUID 屬性會自動偵測。UUID 屬性用來準確識別 LDAP 用戶及群組。此外，如果未在上方指定，內部用戶名稱會基於 UUID 建立。您能覆蓋設定並直接指定屬性，但一定要確保指定的屬性能被用戶及群組取得且唯一。留空則執行默認行為。變更只會對新映射（加入）的 LDAP 用戶及群組生效。",
    "UUID Attribute for Users:" : "用戶的UUID值：",
    "UUID Attribute for Groups:" : "群組的UUID值：",
    "Username-LDAP User Mapping" : "用戶名-LDAP 用戶 Mapping",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "用戶名用於存儲和分配元數據。為了精確地區分和識別用戶，每個LDAP用戶都會有一個內部的用戶名。這要求建立一個用戶名到LDAP用戶的映射。創建的用戶名會被映射到 LDAP用戶的UUID。另外為了節省LDAP連接開銷，DN會被緩存，但不會使用識別。如果DN變了，這些變化會被識別到。在Nextcloud各個頁面會使用內部用戶名。清除映射會造成 系統裡面有大量的殘留信息。清除映射會影響所有的LDAP配置，同時進行雙向配置。不要在生產環境裡面應用可變映射，請僅用於測試環境或早期驗證步驟。",
    "Clear Username-LDAP User Mapping" : "清除 用戶名-LDAP 用戶 Mapping",
    "Clear Groupname-LDAP Group Mapping" : "清除 群組名稱-LDAP 群組 Mapping",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "默認情況下，內部用戶名將從UUID屬性創建。這樣可以確保用戶名是唯一的，並且不需要轉換任何字符。內部用戶名的限制是只能使用以下字符：[a-zA-Z0-9_.@-]。其他字符被替換為它們的ASCII對應或被略去。發生相抵觸時，將加入數字。內部用戶名用於在內部識別用戶。其也是用戶主資料夾的默認名稱。也是遠端URL的一部分，舉例來說，會用於所有 *DAV 服務。使用此設置，默認的行為可以被覆寫。更改僅對新映射（添加）的LDAP用戶有效。將其留空會使用默認行為。"
},
"nplurals=1; plural=0;");
