const fs = require('fs');
function replaceInFile(file, search, replace) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(search, replace);
    fs.writeFileSync(file, content);
  }
}

replaceInFile('test/auth.e2e-spec.ts', "  let userId: string;\n", "");
replaceInFile('test/library.e2e-spec.ts', "  let userId: string;\n", "");
replaceInFile('test/music.e2e-spec.ts', "import { of } from 'rxjs';\n", "");
replaceInFile('test/music.e2e-spec.ts', "  let musicApiService: MusicApiService;\n", "");
replaceInFile('test/unit/auth/auth.service.spec.ts', "import { User, AuthProvider, UserRole }", "import { AuthProvider }");
replaceInFile('test/unit/auth/auth.service.spec.ts', "  mockJwtPayload,\n", "");
replaceInFile('test/unit/auth/auth.service.spec.ts', "  let googleTokenService: jest.Mocked<GoogleTokenService>;\n", "");
replaceInFile('test/unit/auth/auth.service.spec.ts', "  let refreshTokenRepository: jest.Mocked<Repository<RefreshToken>>;\n", "");
replaceInFile('test/unit/library/library.service.spec.ts', "  mockPlaylistResponse,\n", "");
replaceInFile('test/unit/library/library.service.spec.ts', "const result = await service.addFavoriteGenre", "await service.addFavoriteGenre");
replaceInFile('test/unit/music/music-api.service.spec.ts', "  let configService: jest.Mocked<ConfigService>;\n", "");
replaceInFile('test/unit/music/music.controller.spec.ts', "  mockStreamResponse,\n", "");
replaceInFile('test/unit/music/recent-search.service.spec.ts', "  let repository: jest.Mocked<Repository<RecentSearch>>;\n", "");
replaceInFile('test/unit/music/recent-search.service.spec.ts', "  let dataSource: jest.Mocked<DataSource>;\n", "");
replaceInFile('test/unit/music/recent-search.service.spec.ts', "const result = await service.getRecentSearches", "await service.getRecentSearches");
replaceInFile('test/unit/users/users.service.spec.ts', "  let repository: jest.Mocked<Repository<User>>;\n", "");

console.log('Fixed files');
