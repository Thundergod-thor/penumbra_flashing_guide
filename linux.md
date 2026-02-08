# Usage Guide

This page explains how to use the **Penumbra Toolkit** on **Linux**.
Follow the section for **your operating system only**.

---

## 🐧 Linux Users (IMPORTANT)

### 1. Requirements

Before running any Penumbra script on Linux, make sure you have:

- Native **antumbra** Linux binary
- `da.bin` present inside the `bin/` folder
- Proper USB permissions (udev access)
- Root privileges may be required on some systems

⚠️ No driver installation is required on Linux.

---

### 2. Folder Structure (DO NOT CHANGE)

Penumbra/
├── bin/
│ ├── antumbra
│ └── da.bin
├── FIRMWARE/
│ └── *.img
├── imei-backup.sh
├── imei-restore.sh
└── unbrickscript.sh

---

### 3. Make Scripts Executable (ONE TIME)

Before first use, run:

```bash
chmod +x *.sh bin/antumbra

---

### 3. IMEI Backup (RECOMMENDED FIRST)

Run: ./imei-backup.sh

This backs up critical radio and identity partitions:

- nvram
- nvdata
- protect1
- protect2
- persist
- nvcfg
- seccfg

✔ Always perform this step before flashing firmware.

---

### 4. Full Unbrick / Flash

Run: ./unbrickscript.sh

What this does:

- Flashes all required A/B firmware partitions
- Flashes `super.img` **last**
- Restores the device to stock RUI 5 latest firmware
- Does **NOT** flash preloader (safe for unofficially unlocked users)

---
### 5. IMEI Restore (Skip if modem/network works fine)

Run: ./imei-restore.sh
⚠️ Restore **only** backups made from the **same device**.  
Restoring another device’s IMEI data can permanently break network connectivity.

---
