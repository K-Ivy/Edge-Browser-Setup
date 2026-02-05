chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	chrome.tabs.update(tabs[0].id, { url: 'https://k-ivy.github.io/Everforest-Startpage' });
});