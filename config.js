// ===== កំណត់ Cloud (Firebase) =====
// URL មូលដ្ឋានទិន្នន័យ Firebase Realtime Database របស់អ្នក (បានដាក់រួចហើយ)
window.FN_CLOUD_URL='https://forest-nights1-default-rtdb.asia-southeast1.firebasedatabase.app';

// ===== TURN សម្រាប់សំឡេងនិយាយ (ត្រូវការពេលលេងលើ 4G/បណ្តាញទូរស័ព្ទ) =====
// ចុះឈ្មោះឥតគិតថ្លៃនៅ https://dashboard.metered.ca/signup (មើល README_VOICE.md) ហើយដាក់ព័ត៌មានរបស់អ្នកទៅទីនេះ
// ដោះសញ្ញា // ខាងមុខ ហើយជំនួស YOUR_USERNAME និង YOUR_PASSWORD៖
window.FN_ICE=[
  {urls:'stun:stun.relay.metered.ca:80'},
  {urls:'turn:global.relay.metered.ca:80',username:'612541452e02d3ddbd605f29',credential:'C8sDjIL4YJl/wW79'},
  {urls:'turn:global.relay.metered.ca:80?transport=tcp',username:'612541452e02d3ddbd605f29',credential:'C8sDjIL4YJl/wW79'},
  {urls:'turn:global.relay.metered.ca:443',username:'612541452e02d3ddbd605f29',credential:'C8sDjIL4YJl/wW79'},
  {urls:'turns:global.relay.metered.ca:443?transport=tcp',username:'612541452e02d3ddbd605f29',credential:'C8sDjIL4YJl/wW79'}
];
