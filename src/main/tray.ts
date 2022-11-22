import { Menu, Tray, BrowserWindow } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve(__dirname, 'dotdocTemplate.png'))

  const menu = Menu.buildFromTemplate([
    { label: 'DotDoc', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOrControl+3',
      acceleratorWorksWhenHidden: false,
    },
    { type: 'separator' },
    {
      label: 'Sair do DotDoc',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
