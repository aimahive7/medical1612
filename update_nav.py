import os
import re

# Define the new navigation HTML block
new_nav_html = """
            <!-- Navigation -->
            <nav class="desktop-nav">
                <div class="nav-container">
                    <div class="dropdown">
                        <a href="#" class="nav-btn">🏥 Health Care ▾</a>
                        <div class="dropdown-content">
                            <a href="otc.html">💊 OTC Medicines</a>
                            <a href="prescription.html">📋 Prescription</a>
                            <a href="cold.html">🤧 Cold & Cough</a>
                            <a href="heart.html">❤️ Heart & BP</a>
                            <a href="diabetes.html">🩸 Diabetes</a>
                            <a href="skin.html">✨ Skin Care</a>
                            <a href="respiratory.html">🌬️ Respiratory</a>
                            <a href="surgical.html">🏥 Surgical</a>
                            <a href="baby.html">👶 Baby Care</a>
                            <a href="women.html">👩 Women Care</a>
                            <a href="supplements.html">💪 Supplements</a>
                        </div>
                    </div>
                    <a href="#" class="nav-btn">🧪 Lab Tests</a>
                    <a href="#" class="nav-btn">👨‍⚕️ Doctor Care</a>
                    <a href="#services" class="nav-btn">🛠️ Our Services</a>
                    <a href="#about" class="nav-btn">ℹ️ About Us</a>
                </div>
            </nav>

            <!-- Mobile Nav -->
            <nav class="mobile-nav" id="mobile-nav">
                <ul>
                    <li class="dropdown-mobile">
                        <a href="#" class="nav-link">🏥 Health Care ▾</a>
                        <ul style="padding-left: 20px;">
                            <li><a href="otc.html" class="nav-link">💊 OTC Medicines</a></li>
                            <li><a href="prescription.html" class="nav-link">📋 Prescription</a></li>
                            <li><a href="cold.html" class="nav-link">🤧 Cold & Cough</a></li>
                            <li><a href="heart.html" class="nav-link">❤️ Heart & BP</a></li>
                            <li><a href="diabetes.html" class="nav-link">🩸 Diabetes</a></li>
                            <li><a href="skin.html" class="nav-link">✨ Skin Care</a></li>
                            <li><a href="respiratory.html" class="nav-link">🌬️ Respiratory</a></li>
                            <li><a href="surgical.html" class="nav-link">🏥 Surgical</a></li>
                            <li><a href="baby.html" class="nav-link">👶 Baby Care</a></li>
                            <li><a href="women.html" class="nav-link">👩 Women Care</a></li>
                            <li><a href="supplements.html" class="nav-link">💪 Supplements</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="nav-link">🧪 Lab Tests</a></li>
                    <li><a href="#" class="nav-link">👨‍⚕️ Doctor Care</a></li>
                    <li><a href="#services" class="nav-link">🛠️ Our Services</a></li>
                    <li><a href="#about" class="nav-link">ℹ️ About Us</a></li>
                </ul>
            </nav>
"""

# Directory containing HTML files
directory = r"d:\pg\77 Medical\medical1612"

def update_navigation(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Regex to capture the desktop nav
    # We match from <nav class="desktop-nav"> until the first </nav> and consume it.
    # Then we match whitespace/comments until <nav class="mobile-nav" id="mobile-nav"> and its closing </nav>
    
    # New pattern matches the desktop nav, intermediate content (newlines, comments), and mobile nav
    # It attempts to span from the start of desktop-nav to the end of mobile-nav
    pattern = re.compile(
        r'(<nav class="desktop-nav">.*?</nav>)'  # Group 1: Desktop Nav
        r'(.*?)'                                  # Group 2: Gap (comments/whitespace)
        r'(<nav class="mobile-nav" id="mobile-nav">.*?</nav>)', # Group 3: Mobile Nav
        re.DOTALL
    )
    
    match = pattern.search(content)
    if match:
        # We replace the whole block (navs + gap) with our new new_nav_html
        # But wait, our new_nav_html includes the comments "<!-- Navigation -->" and "<!-- Mobile Nav -->"
        # We should just replace the detected range with the new block
        
        # Calculate start and end of the full match
        start, end = match.span()
        new_content = content[:start] + new_nav_html.strip() + content[end:]
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated: {os.path.basename(file_path)}")
    else:
        print(f"Skipped (Pattern not found): {os.path.basename(file_path)}")

# Iterate over all HTML files
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        update_navigation(os.path.join(directory, filename))
