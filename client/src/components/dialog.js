function dialogComponent(title, textContent, $mdDialog) {
  let alert = $mdDialog.alert({
    title,
    textContent,
    ok: 'OK! 👍'
  });

  $mdDialog
    .show(alert)
    .finally(() => { alert = undefined });
}

export default dialogComponent;
