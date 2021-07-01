export function createHideLink (href: string, target: string): void {
  const $a = document.createElement('a')
  $a.href = href
  $a.target = target
  $a.download = 'download'
  document.body.appendChild($a)
  $a.click()
  $a.remove()
}
