
## Document Versioning Compare API

![Upload Document](/img/api_compare.png)

**`POST/compare`**

![Upload Document](/img/post_compare.png)

Endpoint สำหรับอัปโหลดไฟล์เอกสาร PDF จำนวน 2 เวอร์ชันเพื่อให้ระบบวิเคราะห์และเปรียบเทียบความแตกต่างของเนื้อหาในเอกสาร

**Parameters:**
- `doc_name` (string, required) – ชื่อเอกสาร
- `v1_label` (string, optional) – ป้ายกำกับเวอร์ชันแรก ค่าเริ่มต้น v1
- `v2_label` (string, optional) – ป้ายกำกับเวอร์ชันที่สอง ค่าเริ่มต้น v2
- `file_v1` (binary, required) – ไฟล์ PDF เวอร์ชันแรก
- `file_v2` (binary, required) – ไฟล์ PDF เวอร์ชันที่สอง

![Upload Document](/img/post_res.png)

**Example Response**

```js title="JSON"
{
  "job_id": "be2eea34-0d76-47f3-ad70-725d962e65b8"
}
```

`job_id` คือรหัสของงาน (Compare Job) ที่ระบบสร้างขึ้นหลังจากรับไฟล์เอกสารทั้งสองเวอร์ชัน เพื่อนำไปใช้ติดตามหรือดึงผลลัพธ์การวิเคราะห์ความแตกต่างของเอกสารในขั้นตอนถัดไป.

**`GET/compare/status/{job_id}`**

Endpoint สำหรับติดตามสถานะการทำงานของกระบวนการเปรียบเทียบเอกสารโดยใช้ `job_id`

**`GET/compare/result/{job_id}`**

Endpoint สำหรับดูผลลัพท์การเปรียบเทียบเอกสารโดยใช้ `job_id` ที่คืนผลสำเร็จการดำเนินการ

**Example Response**

```js title="Response body"
{
  {
  "doc_name": "Test",
  "v1_label": "v1",
  "v2_label": "v2",
  "pages_v1": 7,
  "pages_v2": 7,
  "paragraphs_v1": 13,
  "paragraphs_v2": 13,
  "changes_count": 2,
  "edit_intensity": "MEDIUM",
  "summary_text": "โดยรวมมีการเปลี่ยนแปลงจำนวน 2 รายการ (เพิ่ม 0 รายการ, ลบ 0 รายการ, แก้ไข 2 รายการ)\n\nส่วนที่ 1 – สรุปภาพรวมการเปลี่ยนแปลง  \n1. แก้ไขเงื่อนไขการให้คำปรึกษาออนไลน์บนหน้า 2 โดยปรับเวลา Response/Resolution และกำหนดช่วง Server down ใหม่ ซึ่งเป็นการเปลี่ยนแปลง SLA ระดับบริการ.  \n2. ปรับระยะเวลา Recovery Time Objective (RTO) ของระบบ KM‑AI บนหน้า 5 จาก 4 ชั่วโมงเป็น 1 วัน และลบรายละเอียดเวลา OS 4 ชั่วโมงออก ส่งผลให้ระยะเวลาฟื้นฟูระบบยาวนานขึ้น.  \n\nส่วนที่ 2 – ข้อเสนอแนะภาพรวม (2 มุมมอง)  \n**มุมมองลูกค้า**  \n1. ตรวจสอบความสอดคล้องของ SLA ใหม่กับความต้องการธุรกิจ; หากไม่ตรงควรเจรจาเพิ่มเงื่อนไขชดเชยหรือข้อกำหนดเพิ่มเติม.  \n2. ปรับแผนการจัดการความเสี่ยงและ Business Continuity Plan ให้รองรับ Server down ที่อาจยาวนานและ RTO ที่เพิ่มขึ้น; จัดทำเอกสาร SLA ที่แก้ไขเป็นลายลักษณ์อักษรและเก็บเป็นหลักฐาน.  \n\n**มุมมองผู้ให้บริการ**  \n1. ประเมินความสามารถในการปฏิบัติตาม SLA ใหม่; จัดสรรบุคลากรและเทคโนโลยีเพิ่มเติมเพื่อให้ตอบสนองตามเวลา Response/Resolution และ RTO ที่กำหนด.  \n2. ปรับปรุง SOP, ระบบมอนิเตอร์, เอกสาร SLA และแผนการสื่อสารให้สอดคล้องกับเงื่อนไขใหม่; กำหนดค่าปรับหรือชดเชยที่เป็นธรรมเพื่อสร้างความเชื่อมั่นให้ลูกค้า.  \n\nส่วนที่ 3 – วิเคราะห์ผู้ที่มีส่วนได้ส่วนเสีย  \n1. ลูกค้า (ผู้รับบริการ) – ต้องการความต่อเนื่องของการดำเนินงานและการคุ้มครองจากการหยุดชะงักของระบบ.  \n2. ผู้ให้บริการ (ผู้ขาย) – ต้องรับผิดชอบต่อการปฏิบัติตาม SLA ใหม่และจัดสรรทรัพยากรให้สอดคล้อง.  \n3. ทีมงานไอทีภายในองค์กรลูกค้า – ต้องอัปเดตกระบวนการตอบสนองและฟื้นฟูระบบตาม RTO ที่เปลี่ยนแปลง.  \n4. ทีมสนับสนุนและการดำเนินงานของผู้ให้บริการ – ต้องปรับ SOP, ระบบมอนิเตอร์และการแจ้งเตือนให้สอดคล้องกับ SLA ใหม่.  \n5. ผู้ตรวจสอบภายนอก/หน่วยงานกำกับดูแล (เช่น ISO 22301, ISO 27001) – ต้องตรวจสอบว่าการเปลี่ยนแปลงไม่ทำให้การปฏิบัติตามมาตรฐานลดลง.  \n6. ผู้ใช้ปลายทาง (พนักงานหรือผู้บริโภคของลูกค้า) – จะได้รับผลกระทบจากระยะเวลาการฟื้นฟูที่ยาวนานขึ้นและต้องได้รับการสื่อสารอย่างชัดเจน.",
  "overall_risk_level": "MEDIUM",
  "impact_scores": {
    "scope_impact_score": 5,
    "timeline_impact_score": 55,
    "cost_impact_score": 5,
    "resource_impact_score": 5,
    "risk_impact_score": 60,
    "contract_impact_score": 45,
    "stakeholder_impact_score": 25,
    "architecture_impact_score": 5
  },
  "risk_comment": "จาก Paragraph หน้า 2 (page 2) มีการแก้ไขเงื่อนไข SLA เช่น การลบระยะเวลา Resolution Time และเพิ่มข้อความ Server down 1 วัน ซึ่งเป็นการเปลี่ยนแปลงข้อกำหนดสัญญา (contract) ทำให้คะแนน Contract อยู่ที่ระดับ 31‑50 (45 คะแนน) และผลต่อ Scope เพียงการเปลี่ยนแปลงคำ wording จึงได้คะแนนต่ำ (5 คะแนน) \nจาก Paragraph หน้า 5 (page 5) มีการเปลี่ยนแปลง Recovery Time Objective (RTO) จาก 4 ชั่วโมงเป็น 1 วัน ซึ่งเพิ่มระยะเวลาการกู้คืนอย่างมีนัยสำคัญ ส่งผลต่อ Timeline (คะแนน 55) และเพิ่มความเสี่ยงต่อการไม่สามารถฟื้นฟูระบบได้เร็วตามที่คาดไว้ ทำให้ Risk Exposure อยู่ในระดับ High Probability Risk (คะแนน 60) ซึ่งเป็นคะแนนสูงสุดของมิติทั้งหมด \nดังนั้นมิติที่มีผลสูงสุดคือ Risk Exposure (คะแนน 60) และระดับความเสี่ยงรวมของโครงการอยู่ในระดับ MEDIUM (สูงสุด 60 อยู่ในช่วง 26‑60)",
  "json_report_path": "data/outputs/Test_v1_vs_v2.json",
  "html_report_path": "data/outputs/Test_v1_vs_v2.html",
  "run_id": 7,
  "html_report_url": "/reports/Test_v1_vs_v2.html",
  "json_report_url": "/reports/Test_v1_vs_v2.json",
  "runtime_minutes": 1,
  "runtime_seconds": 51.7
}
}
```
## History API

![Upload Document](/img/api_history.png)

**`GET/comparisons/{comparisons_id}`**

Endpoint สำหรับเรียกดูรายละเอียดการเปลี่ยนแปลงของแต่ละ comparisons_id

**`DELETE/comparisons/{comparisons_id}`**

Endpoint สำหรับลบข้อมูลของ comparisons_id

**`GET/comparisons`**

Endpoint สำหรับ List รายการการเปลี่ยนทั้งหมดเพื่อนำไปแสดงผลประวัติการใช้งาน

**`POST/compare/continue/start`**

![Upload Document](/img/compare_con.png)

Endpoint สำหรับการเปรียบเทียบเอกสารเดิมกับ comparisons_id จะมีการทำงานที่คล้ายกับ **[POST/compare](../docs/API#document-versioning-compare-api)**

## AI Chat API

![Upload Document](/img/api_chat.png)

**`POST/changes/{change_id}/chat`**

Endpoit สำหรับพูดคุยกับ AI ของแต่ละ change_id