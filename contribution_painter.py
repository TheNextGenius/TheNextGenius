import os
import random
import subprocess
from datetime import datetime, timedelta

# Configuration
START_DATE = datetime(2025, 1, 1)  # Change this to when you want the graph to start filling
DAYS_TO_PAINT = 365
MAX_COMMITS_PER_DAY = 15
FILE_NAME = "garbage.txt"

def paint_contributions():
    print(f"🎨 Starting Contribution Painter...")
    print(f"📅 Start Date: {START_DATE.strftime('%Y-%m-%d')}")
    
    current_date = START_DATE
    total_commits = 0

    for day in range(DAYS_TO_PAINT):
        # Randomize commits for this day (logic: some days heavy, some light)
        commits_today = random.randint(1, MAX_COMMITS_PER_DAY)
        
        # 10% chance of 0 commits (rest days)
        if random.random() < 0.1:
            commits_today = 0

        current_date_str = current_date.strftime('%Y-%m-%d 12:00:00')

        if commits_today > 0:
            print(f"🖌️ Painting {current_date.strftime('%Y-%m-%d')}: {commits_today} strokes.")
            
            for _ in range(commits_today):
                # Update the dummy file
                with open(FILE_NAME, "a") as f:
                    f.write(f"Contribution stroke: {current_date_str}\n")
                
                # Commit with custom date
                # GIT_AUTHOR_DATE and GIT_COMMITTER_DATE environment variables set the commit time
                env = os.environ.copy()
                env["GIT_AUTHOR_DATE"] = current_date_str
                env["GIT_COMMITTER_DATE"] = current_date_str
                
                subprocess.run(["git", "add", FILE_NAME], check=True)
                subprocess.run(
                    ["git", "commit", "-m", f"paint: contribution stroke for {current_date.strftime('%Y-%m-%d')}"],
                    env=env,
                    check=True,
                    stdout=subprocess.DEVNULL  # Silence output
                )
                total_commits += 1

        current_date += timedelta(days=1)

    print(f"\n✅ Masterpiece Complete!")
    print(f"Total Commits Generated: {total_commits}")
    print("🚀 Run 'git push' to upload your new contribution graph!")

if __name__ == "__main__":
    confirm = input("⚠️ This will generate MANY commits. Are you sure? (y/n): ")
    if confirm.lower() == 'y':
        paint_contributions()
    else:
        print("Operation cancelled.")
