const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    bg: "hsla(0, 100%, 67%, 5%)",
    color: "var(--light-red)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    bg: "hsla(39, 100%, 56%, 5%)",
    color: "var(--orangey-yellow)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    bg: "hsla(166, 100%, 37%, 5%)",
    color: "var(--green-teal)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    bg: "hsla(234, 85%, 45%, 5%)",
    color: "var(--cobalt-blue)",
  },
]

function main() {
  window.addEventListener("load", () => {
    const list = document.getElementById("summary-list")
    let html = ""
    data.forEach((item) => {
      html += `
      <li style="background: ${item.bg};">
      <div class="literal">
        <img
          src=${item.icon}
          alt="Icon relevant of the score ${item.category}"
        /><span style="color: ${item.color};">${item.category}</span>
      </div>
      <div class="numeral">
        <span><strong>${item.score}</strong> </span><span class="light">/ 100</span>
      </div>
    </li>`
    })
    console.log(html)
    list.innerHTML = html
  })
}

main()
