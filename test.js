let healthBar = document.querySelector('.health');

console.log(healthBar)

while (true) {
  healthNum = 100
  healthBar.style.width = healthNum + "rem";

  for (let healthNum = 100; healthNum > 0; healthNum--) {
    console.log(healthBar.style.width)
    let newWidth = healthNum + "rem"
    console.log(newWidth)
    healthBar.style.width = newWidth;
    // alert("asdlpkgoksdgokasdkosg")
    // alert(newWidth)
  };
}
