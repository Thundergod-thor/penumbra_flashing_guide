# Usage Guide

This page explains how to use the **Penumbra Toolkit** on **Windows**.
Follow the section for **your operating system only**.

---

## 🪟 Windows Users (IMPORTANT)

### 1. Install USB Driver (MANDATORY)

Before running **any** Penumbra script on Windows, you **must install the USB driver**.

1. Open the Penumbra toolkit folder
2. Run: PenumbraDrivers.exe
3. When the installer opens:
- Select **libusb**
- Click **Install**
4. Reboot your PC (recommended)

⚠️ If this step is skipped, antumbra will stay at:
Waiting for MTK device…

This step is **Windows-only**.  
Linux users do **not** need this driver.

---

### 2. Folder Structure (DO NOT CHANGE)

Penumbra
├── bin
│ ├── antumbra.exe
│ └── da.bin
├── FIRMWARE
│ └── *.img
├── imei-backup.bat
├── imei-restore.bat
├── unbrickscript.bat
└── PenumbraDrivers.exe

---

### 3. IMEI Backup (RECOMMENDED FIRST)

Run: imei-backup.bat

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

Run: unbrickscript.bat

What this does:

- Flashes all required A/B firmware partitions
- Flashes `super.img` **last**
- Restores the device to stock RUI 5 latest firmware
- Does **NOT** flash preloader (safe for unofficially unlocked users)

---
### 5. IMEI Restore (Skip if modem/network works fine)

Run: imei-restore.bat
⚠️ Restore **only** backups made from the **same device**.  
Restoring another device’s IMEI data can permanently break network connectivity.

---


