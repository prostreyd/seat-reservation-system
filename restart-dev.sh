git pull;

# получем имя докер композера 
# (либо docker compose либо docker-compose)
# по которому можно обращяться
source docker-compose-name.sh;

env_path="dev.env"

"${DOCKER_COMPOSE[@]}" -f docker-compose.dev.yml --env-file $env_path down -v;
"${DOCKER_COMPOSE[@]}" -f docker-compose.dev.yml --env-file $env_path up -d --build;
"${DOCKER_COMPOSE[@]}" -f docker-compose.dev.yml logs -f --tail=100;