document.getElementById('generateButton').addEventListener('click', function() {
    const drinks = [
        "Antelope Cooling Water 羚羊清热水",
        "Water Chestnut Drink 马蹄水",
        "Honey Aloe Vera Drink 芦丁蜂蜜汁",
        "Barley Drink 薏米水",
        "Luo Han Guo 罗汉果茶",
        "Honey Wheat Grass 麦草蜂蜜水",
        "Roselle Hawthorn Tea 洛神花山楂茶",
        "Winter Melon Tea with Honey 蜂蜜冬瓜茶",
        "Almond Figs Tea 川贝杏仁茶",
        "Honeysuckle Flower Tea 金银花凉茶",
        "Ge Gen Tea 葛根茶",
        "Prunella Tea 夏古草",
        "Peppermint Tea 薄荷茶",
        "Shi Huo Tea 石霍凉茶",
        "Raspberry Leaf Tea 覆盆子茶",
        "Lemon Balm Tea 香蜂草茶",
        "Chamomile Tea 甘菊茶"
    ];
    
    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    
    const content = document.getElementById('generatedContent');
    content.innerHTML = `<b>${randomDrink}</b>`;
    content.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('All').addEventListener('click', () => {
      filterTeas('');
    });
    // By default, show all teas
    filterTeas('');
  });

  function filterTeas(filter) {
    const allTeas = document.querySelectorAll('.col');
    allTeas.forEach(tea => {
      if (!filter) {
        tea.style.display = 'block';
      } else {
        const buttons = tea.querySelectorAll('button');
        let shouldDisplay = false;
        buttons.forEach(button => {
          if (button.id === filter) {
            shouldDisplay = true;
          }
        });
        tea.style.display = shouldDisplay ? 'block' : 'none';
      }
    });
  }