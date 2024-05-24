function redirect(requestDetails) {
    let url = new URL(requestDetails.url);
    let searchParams = new URLSearchParams(url.search);
  
    if (!searchParams.has('udm')) {
      searchParams.set('udm', '14');
      url.search = searchParams.toString();
      return {
        redirectUrl: url.toString()
      };
    }
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: ["*://www.google.com/search*"] },
    ["blocking"]
  );
  