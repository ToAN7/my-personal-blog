window.addEventListener("load", () => {
	let header = document.querySelector("h1");
	let body = document.querySelector("body");
	let start = Date.now();

	header.addEventListener("click", () => {
		let current = Date.now();
		console.log(current - start);
		start = current;
	});

	let imgs = document.querySelectorAll(".imgs>div");

	for (let i of imgs) {
		i.addEventListener("click", () => {
			for (let a of imgs) {
				a.classList.remove("active");
			}
			i.classList.add("active");
		});
	}
});
