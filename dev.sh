echo "suggest to re build.sh to reload setup"
docker-compose down
docker-compose kill
# docker-compose build --no-cache
docker-compose -f docker-compose.yml up -d --force-recreate --build
docker-compose ps
docker-compose logs
docker-compose top
