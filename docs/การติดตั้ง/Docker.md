
## ข้อกำหนดเบื้องต้น

ติดตั้ง GitหรือGitHub Desktopเพื่อโคลน repository และติดตั้ง Docker Desktop 

## คำแนะนำในการติดตั้ง

เปิด Docker Desktop เพื่อเปิด Engine

### **1. Clone Repository**

```js title="PowerShell"
git clone https://github.com/thawornsalee01-ux/Document-Version-Compare.git
cd Document-Version-Compare
```

### **2. กำหนดค่าตัวแปรสภาพแวดล้อม**

```js title="PowerShell"
LOCALMODEL_API_KEY=   #ใส่ API Key ของ LocalModel ที่นี่
LOCALMODEL_BASE_URL=   #ใส่ URL ของ LocalModel API ที่นี่ 
TAVILY_API_KEY=   #ใส่ API Key ของ Tavily ที่นี่

LOCALMODEL_MODEL_SUM=       #ใส่ชื่อโมเดลสำหรับการสรุปของ LocalModel ที่นี่
LOCALMODEL_MODEL_COMMENT=    #ใส่ชื่อโมเดลสำหรับการแสดงความคิดเห็นของ LocalModel ที่นี่
LOCALMODEL_MODEL_SUGGESTION=     #ใส่ชื่อโมเดลสำหรับการแนะนำของ LocalModel ที่นี่
```

### **3. สร้าง Images**

```js title="PowerShell"
docker compose build
```

### **4. เริ่มเปิดใช้งาน**

```js title="PowerShell"
docker compose start 
```

- `PORT:3000` สำหรับหน้าเว็บแอพพลิเคชั่น
- `PORT:8000` API **[Document Versioning Compare](../API#document-versioning-compare-api)**
- `PORT:8001` API **[History](../API#history-api)**
- `PORT:8030` API **[AI Chat](../API#ai-chat-api)**

## **การหยุดการทำงาน Containers**

```js title="PowerShell"
docker compose stop 
```

## **กรณีมีการแก้ไขโค้ด ควรรีสตาร์ท**

**สำหรับรีสตาร์ททั้งหมด**

```js title="PowerShell"
docker compose restart
```

**สำหรับรีสตาร์ทแค่บางส่วนในกรณีแก้ไขแค่บางส่วน**

```js title="PowerShell"
docker compose restart "Containers name"
```