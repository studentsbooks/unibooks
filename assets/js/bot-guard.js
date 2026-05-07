
            (function() {
                const goodBots = /googlebot|bingbot|yandexbot|duckduckbot|facebot|twitterbot|linkedinbot|slackbot|chatgpt-user|gptbot|anthropic-ai|slurp|applebot|baiduspider/i;
                const badBots = /dmca|semrush|ahrefs|majestic|rogerbot|dotbot/i;
                
                if (goodBots.test(navigator.userAgent)) return;
                if (badBots.test(navigator.userAgent)) { window.location.href = "https://www.amazon.com"; return; }
                if (sessionStorage.getItem('isHuman')) return;

                const overlay = document.createElement('div');
                overlay.id = 'bot-overlay';
                
                const n1 = Math.floor(Math.random() * 50);
                const n2 = Math.floor(Math.random() * 50);
                const ans = n1 + n2;

                overlay.innerHTML = `
                    <div class="glass-modal">
                        <h3>Human Verification</h3>
                        <p>To access the premium library, please solve:</p>
                        <h4>${n1} + ${n2} = ?</h4>
                        <input type="number" id="bot-ans" class="form-control mb-3">
                        <button id="bot-submit" class="btn btn-primary">Submit</button>
                    </div>`;
                
                document.body.appendChild(overlay);
                
                document.getElementById('bot-submit').onclick = function() {
                    const input = parseInt(document.getElementById('bot-ans').value);
                    if (input === ans) {
                        sessionStorage.setItem('isHuman', 'true');
                        overlay.remove();
                    } else {
                        window.location.href = "https://www.amazon.com";
                    }
                };
            })();
        