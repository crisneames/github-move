-- 1. List the names of all NFL teams'
SELECT name FROM teams;

-- 2. List the stadium name and head coach of all NFC teams
SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

-- 3. List the head coaches of the AFC South
SELECT head_coach FROM teams WHERE division = 'South' and conference = 'AFC';

-- 4. The total number of players in the NFL
SELECT count(name) FROM players;


-- 5. The team names and head coaches of the NFC North and AFC East
SELECT name, head_coach, division, conference where division = 'North' and conference = 'NFC'
SELECT name, head_coach, division, conference where division = 'East' and conference = 'AFC'


-- 6. The 50 players with the highest salaries
SELECT name, salary FROM players ORDER BY salary DESC LIMIT 50;

-- 7. The average salary of all NFL players
SELECT AVG(salary) FROM players;

-- 8. The names and positions of players with a salary above 10_000_000
SELECT name, position FROM players WHERE salary > 10000000;

-- 9. The player with the highest salary in the NFL
SELECT name, salary FROM players ORDER BY salary DESC LIMIT 1;

-- 10. The name and position of the first 100 players with the lowest salaries
SELECT name, position, salary FROM players ORDER BY salary LIMIT 100;

-- 11. The average salary for a DE in the nfl
SELECT AVG(salary) FROM players where position = 'DE';

-- 12. The names of all the players on the Buffalo Bills
SELECT a.name, b.name FROM teams a, players b WHERE a.name = 'Buffalo Bills' and a.id = b.team_id;

-- 13. The total salary of all players on the New York Giants
SELECT sum(salary) FROM teams a, players b WHERE a.name = 'New York Giants' and a.id = b.team_id;

-- 14. The player with the lowest salary on the Green Bay Packers
SELECT b.name, b.salary FROM teams a, players b WHERE a.name = 'Green Bay Packers' and a.id = b.team_id ORDER BY b.salary LIMIT 1; 
