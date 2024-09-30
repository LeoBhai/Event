import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('792b9f3d-01e5-4576-b1ff-8417577638fe', '1Jammie.Wolf@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=3', 'invfedcba', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab', '10Cordia72@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=12', 'invfedcba', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('94941c11-7872-4814-b22f-5a69316f6d8f', '19Aniyah_Borer@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv789012', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c85f74fe-8b83-41bb-aa18-e99dbc40bd76', '28Melyna.Wiegand@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv654321', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('8c2e52d0-fef6-4d9a-8501-a887d098dd19', '37Leonie65@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=39', 'invabcdef', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9d25f12b-f529-4200-ae46-36b399f9c515', '46Augustus.Stanton27@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv654321', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('81b8f705-bc17-4e72-9ee4-758c42d06024', '55Amara.Bahringer@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=57', 'invabcdef', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('bf6a28d2-f9c8-4e33-a46f-812adef6f763', '73Owen_Schaden@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv789012', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('aa786bd5-9540-4321-b651-7c3371f27fd1', '82Rosamond.Stanton@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv654321', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('93392a35-af10-42ca-b106-4b29e38a72c4', 'm9n8b7v6c5x4z3a2s1d0', '{"demulceo":"voluptatibus","cupiditas":"labore","coma":"cupiditas","vivo":"depulso"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5bb5078b-7a65-44e5-8a44-e76b9201f65b', 'a1b2c3d4e5f6g7h8i9j0', '{"stabilis":"tutis","victoria":"deripio","cerno":"circumvenio","adnuo":"tenuis","tendo":"calculus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1829771a-2a6a-473a-893c-33f58b42c28a', 'k9j8h7g6f5d4s3a2z1x0', '{"terra":"inflammatio","volo":"tactus","velociter":"tamquam"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c4071b4a-caff-4fd7-8bc9-603db4116824', 'm9n8b7v6c5x4z3a2s1d0', '{"utilis":"vitiosus","numquam":"somnus","defero":"territo","succurro":"iure"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5dbfd45e-9e69-4261-98fe-320648670a30', 'p1o2i3u4y5t6r7e8w9q0', '{"tepesco":"verus","canis":"cervus","solio":"dens"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('2b40c210-b32c-4dfe-b626-7c670813bdaa', 'm9n8b7v6c5x4z3a2s1d0', '{"paulatim":"deludo","aro":"vinitor","expedita":"delibero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('046cc34b-470b-4820-871b-1ef02450c6f0', 'z9y8x7w6v5u4t3s2r1q0', '{"barba":"neque","suspendo":"ceno","quaerat":"cohibeo","tutis":"vix"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('8d2d5c08-a6e6-4035-95de-f409c63a9cc4', 'm9n8b7v6c5x4z3a2s1d0', '{"confero":"esse","illo":"truculenter","degusto":"cribro","carbo":"sublime"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1d8a93cc-a4c1-44ba-9ca6-47fd49080753', 'z9y8x7w6v5u4t3s2r1q0', '{"tristis":"aspicio","cedo":"crebro","benigne":"fuga","victoria":"agnitio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('97790953-63ab-4a0f-8455-68f44e2fdf11', 'a1b2c3d4e5f6g7h8i9j0', '{"angustus":"alii","auditor":"thermae","dedecor":"demum","adicio":"amplexus","decimus":"est"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('54287521-b964-4f7b-b0cd-4ecc970cb155', 'World Watch', 'https://i.imgur.com/YfJQV5z.png?id=122');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('cb025904-9c40-43e9-9458-5f6ac0c73d8a', 'World Watch', 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1b325772-180f-43c5-9db1-cc9dcd0e3a56', 'Tech Today', 'https://i.imgur.com/YfJQV5z.png?id=128');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a4cf6f97-087c-4d1d-b955-5eec713fb524', 'Tech Today', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8394719d-f036-4fa7-9963-7c71c72137cd', 'Daily Digest', 'https://i.imgur.com/YfJQV5z.png?id=134');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b516efee-4ff6-486e-893d-f4ba3ecac676', 'Daily Digest', 'https://i.imgur.com/YfJQV5z.png?id=137');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('dc16e676-7929-46e2-a7c0-063f310e27bd', 'Sports Central', 'https://i.imgur.com/YfJQV5z.png?id=140');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('bb52fd77-555b-45e5-b919-35dca663ef9f', 'Sports Central', 'https://i.imgur.com/YfJQV5z.png?id=143');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fae567d8-bc3a-4149-b911-e009512b2a8d', 'Sports Central', 'https://i.imgur.com/YfJQV5z.png?id=146');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fa8ff5c7-a8e7-4174-8a20-e686c020951f', 'Global News Network', 'https://i.imgur.com/YfJQV5z.png?id=149');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2ecf5f86-4a56-4d11-829b-373440eb8988', 'Editor', '8c2e52d0-fef6-4d9a-8501-a887d098dd19', 'bb52fd77-555b-45e5-b919-35dca663ef9f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('65635c1d-ccac-4a22-bd0c-d975ae8738ac', 'Subscriber', '9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab', '8394719d-f036-4fa7-9963-7c71c72137cd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5874b750-dfa3-4f34-bd58-408165b771b6', 'Subscriber', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fae567d8-bc3a-4149-b911-e009512b2a8d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('46d024e4-daa1-43f6-8e99-58bb0ae3ec73', 'Administrator', '8c2e52d0-fef6-4d9a-8501-a887d098dd19', 'dc16e676-7929-46e2-a7c0-063f310e27bd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2bd39ae1-aa7e-42c3-ad06-195d9b5d135a', 'Subscriber', '81b8f705-bc17-4e72-9ee4-758c42d06024', 'fae567d8-bc3a-4149-b911-e009512b2a8d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c4bcd5c8-9b44-4dfc-8073-7a408ef9da95', 'Editor', '94941c11-7872-4814-b22f-5a69316f6d8f', '54287521-b964-4f7b-b0cd-4ecc970cb155');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('47b4855d-ea07-4545-a35f-206741bc3db1', 'Contributor', '792b9f3d-01e5-4576-b1ff-8417577638fe', '8394719d-f036-4fa7-9963-7c71c72137cd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c899d9f7-c545-41fb-a930-8d9be854e3a9', 'Subscriber', '94941c11-7872-4814-b22f-5a69316f6d8f', 'fae567d8-bc3a-4149-b911-e009512b2a8d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('0e0dcd7b-1534-4d10-b7ee-3c395d21fbb1', 'Contributor', '792b9f3d-01e5-4576-b1ff-8417577638fe', '1b325772-180f-43c5-9db1-cc9dcd0e3a56');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cb67adfb-d717-4fdd-b2df-3f61ce1aff8f', 'Administrator', 'bf6a28d2-f9c8-4e33-a46f-812adef6f763', '8394719d-f036-4fa7-9963-7c71c72137cd');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('9352ab21-0ebc-4f5b-b4a3-0f10b5fbbadd', 'httpsexample.comendpoint4', 'subscription_data_3', '8c2e52d0-fef6-4d9a-8501-a887d098dd19');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('1cfd447d-c02b-44fd-ae43-0a57c310f349', 'httpsexample.comendpoint3', 'subscription_data_5', '792b9f3d-01e5-4576-b1ff-8417577638fe');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('76347c0a-35ad-411f-9a0d-4c461b040528', 'httpsexample.comendpoint1', 'subscription_data_4', '81b8f705-bc17-4e72-9ee4-758c42d06024');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('576f0542-30fc-4154-abf4-e3b40e764297', 'httpsexample.comendpoint5', 'subscription_data_3', 'aa786bd5-9540-4321-b651-7c3371f27fd1');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('af7b1a4e-f538-4f7a-a2c5-593e4ed39936', 'httpsexample.comendpoint3', 'subscription_data_2', '9d25f12b-f529-4200-ae46-36b399f9c515');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('cb153471-f8b2-4b6a-9c2f-2cf34177d4e3', 'httpsexample.comendpoint1', 'subscription_data_1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('c1d81d83-3726-49f2-b0f5-fce9068c5afd', 'httpsexample.comendpoint2', 'subscription_data_3', '9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('364f67e4-6528-4415-a48a-5be7521c21e9', 'httpsexample.comendpoint2', 'subscription_data_4', 'aa786bd5-9540-4321-b651-7c3371f27fd1');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('dde17e7d-02ce-49b4-ab4f-d0d2ca456b93', 'httpsexample.comendpoint2', 'subscription_data_1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('482fc44a-7e10-4215-90f7-adb1c9f1eb76', 'httpsexample.comendpoint1', 'subscription_data_2', '81b8f705-bc17-4e72-9ee4-758c42d06024');

INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('b887bdae-d553-4727-b803-6da20f0fe44e', 'Health Herald', 'https://i.imgur.com/YfJQV5z.png?id=202', 'https://i.imgur.com/YfJQV5z.png?id=203');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('bf8dca91-06d0-4b7a-ae06-18d9be74c3a2', 'Sports Daily', 'https://i.imgur.com/YfJQV5z.png?id=206', 'https://i.imgur.com/YfJQV5z.png?id=207');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('c857faca-655a-4771-a315-4af2ba4957fe', 'Health Herald', 'https://i.imgur.com/YfJQV5z.png?id=210', 'https://i.imgur.com/YfJQV5z.png?id=211');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('ace6a2ec-df44-49ea-82d3-2693d8e340d9', 'Health Herald', 'https://i.imgur.com/YfJQV5z.png?id=214', 'https://i.imgur.com/YfJQV5z.png?id=215');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('6fcf6012-9044-48fa-a354-3eb53f8db8d7', 'Sports Daily', 'https://i.imgur.com/YfJQV5z.png?id=218', 'https://i.imgur.com/YfJQV5z.png?id=219');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('d03f1b64-3c8e-4111-888e-f4f26d649335', 'Sports Daily', 'https://i.imgur.com/YfJQV5z.png?id=222', 'https://i.imgur.com/YfJQV5z.png?id=223');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('0f0cef50-8692-406b-896b-bde325711f07', 'Sports Daily', 'https://i.imgur.com/YfJQV5z.png?id=226', 'https://i.imgur.com/YfJQV5z.png?id=227');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('32a20132-204a-4a5d-8182-1d0d798a4da8', 'Sports Daily', 'https://i.imgur.com/YfJQV5z.png?id=230', 'https://i.imgur.com/YfJQV5z.png?id=231');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('0663cb21-e5a2-466f-9cba-ad389d881539', 'Health Herald', 'https://i.imgur.com/YfJQV5z.png?id=234', 'https://i.imgur.com/YfJQV5z.png?id=235');
INSERT INTO "NewsSource" ("id", "name", "websiteUrl", "logoUrl") VALUES ('81221ae1-43a6-4a48-a0fc-333deae5a060', 'Global News', 'https://i.imgur.com/YfJQV5z.png?id=238', 'https://i.imgur.com/YfJQV5z.png?id=239');

INSERT INTO "Category" ("id", "name", "description") VALUES ('9f591752-5d36-43a2-abb9-fab33a8cfb8a', 'Politics', 'Information and news on health and wellness.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('197e4fe4-f4b5-4e16-97ef-c6c7daa169f8', 'Health', 'Updates and stories from the world of sports.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('f96cdc2d-f841-4850-a901-df8c7068767d', 'Entertainment', 'News related to government policies and political events.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('3ab8b412-054a-49bb-94cc-4709aee0e3a8', 'Sports', 'News related to government policies and political events.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('c16518c6-2035-4579-bfaf-2ab46faacd0a', 'Technology', 'Information and news on health and wellness.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('7f184cb2-7700-4258-8a4e-8724c8df6fa1', 'Technology', 'Coverage of movies music and celebrity news.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('1d600702-45c5-4ba4-9b85-19cc58974471', 'Sports', 'Coverage of movies music and celebrity news.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('62874f0e-1fa7-48fe-987c-57982a85d2f1', 'Sports', 'Information and news on health and wellness.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('f27ea0d6-080c-40fa-96bf-e18364d1a6c2', 'Health', 'Updates and stories from the world of sports.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('aa4ca43b-d093-43ae-b2e9-722c257e3faf', 'Sports', 'Information and news on health and wellness.');

INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('dc590f68-9200-4f89-ad3a-6451e9234198', 'Tech Giants Unveil Latest Innovations', 'Leading technology companies showcased their newest products and services at the annual tech conference.', '2024-03-24T03:42:36.288Z', '9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab', '6fcf6012-9044-48fa-a354-3eb53f8db8d7', '62874f0e-1fa7-48fe-987c-57982a85d2f1');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('18cd3243-49c3-41bb-81b6-fea942f60107', 'Sports Roundup Weekend Highlights', 'World leaders gathered to discuss urgent climate issues resulting in several key agreements and initiatives.', '2024-07-26T11:59:40.076Z', '94941c11-7872-4814-b22f-5a69316f6d8f', '0f0cef50-8692-406b-896b-bde325711f07', 'aa4ca43b-d093-43ae-b2e9-722c257e3faf');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('4cbac9c9-75d9-4d4b-8ad6-cc8989f0325f', 'Sports Roundup Weekend Highlights', 'This weekends sports events saw thrilling matches and unexpected outcomes capturing the attention of fans worldwide.', '2023-10-06T19:15:21.894Z', '94941c11-7872-4814-b22f-5a69316f6d8f', '81221ae1-43a6-4a48-a0fc-333deae5a060', 'f96cdc2d-f841-4850-a901-df8c7068767d');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('313d1396-3561-4079-951d-d6b2c54dd454', 'Global Climate Summit Key Takeaways', 'The stock market reached an alltime high today driven by strong earnings reports and investor optimism.', '2024-11-25T03:21:09.469Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c857faca-655a-4771-a315-4af2ba4957fe', '197e4fe4-f4b5-4e16-97ef-c6c7daa169f8');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('274ace09-3475-45a4-88c4-b7a38fb48e4e', 'Sports Roundup Weekend Highlights', 'The stock market reached an alltime high today driven by strong earnings reports and investor optimism.', '2024-12-19T14:04:09.383Z', 'c85f74fe-8b83-41bb-aa18-e99dbc40bd76', '81221ae1-43a6-4a48-a0fc-333deae5a060', 'c16518c6-2035-4579-bfaf-2ab46faacd0a');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('a1b562ee-256f-4598-a1bb-9ca3113eba08', 'Tech Giants Unveil Latest Innovations', 'World leaders gathered to discuss urgent climate issues resulting in several key agreements and initiatives.', '2023-12-17T17:02:26.439Z', '81b8f705-bc17-4e72-9ee4-758c42d06024', '32a20132-204a-4a5d-8182-1d0d798a4da8', '3ab8b412-054a-49bb-94cc-4709aee0e3a8');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('4e246d33-116c-4bd1-aecd-d88da9ee7880', 'Health Experts Discuss Pandemic Response', 'The stock market reached an alltime high today driven by strong earnings reports and investor optimism.', '2023-11-02T01:20:43.483Z', 'bf6a28d2-f9c8-4e33-a46f-812adef6f763', '6fcf6012-9044-48fa-a354-3eb53f8db8d7', 'c16518c6-2035-4579-bfaf-2ab46faacd0a');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('a61ffe6d-208e-4a46-a3d5-55b38cd77acb', 'Sports Roundup Weekend Highlights', 'This weekends sports events saw thrilling matches and unexpected outcomes capturing the attention of fans worldwide.', '2025-07-09T06:24:41.902Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '81221ae1-43a6-4a48-a0fc-333deae5a060', '62874f0e-1fa7-48fe-987c-57982a85d2f1');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('f954a722-ea19-4780-bca2-781b1726bb68', 'Tech Giants Unveil Latest Innovations', 'Leading technology companies showcased their newest products and services at the annual tech conference.', '2024-12-17T00:59:27.161Z', 'c85f74fe-8b83-41bb-aa18-e99dbc40bd76', 'ace6a2ec-df44-49ea-82d3-2693d8e340d9', 'f96cdc2d-f841-4850-a901-df8c7068767d');
INSERT INTO "Article" ("id", "title", "content", "publishDate", "authorId", "newsSourceId", "categoryId") VALUES ('f4c28f38-9f9b-4550-ab3f-26a92b52bf78', 'Tech Giants Unveil Latest Innovations', 'World leaders gathered to discuss urgent climate issues resulting in several key agreements and initiatives.', '2025-03-02T03:47:00.425Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0f0cef50-8692-406b-896b-bde325711f07', '197e4fe4-f4b5-4e16-97ef-c6c7daa169f8');

INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('77359811-4937-434a-887b-e8777aafb59a', false, '81b8f705-bc17-4e72-9ee4-758c42d06024', '62874f0e-1fa7-48fe-987c-57982a85d2f1');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('bc1ea1b6-5604-444b-9059-94e83688b676', false, 'bf6a28d2-f9c8-4e33-a46f-812adef6f763', 'f96cdc2d-f841-4850-a901-df8c7068767d');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('6ba44ee6-7f27-4973-86c5-0f98cb5c8c1c', false, '94941c11-7872-4814-b22f-5a69316f6d8f', '197e4fe4-f4b5-4e16-97ef-c6c7daa169f8');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('0225f247-6d7b-497c-bd73-4fcb3761287b', false, '9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab', 'c16518c6-2035-4579-bfaf-2ab46faacd0a');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('986b44f8-c329-4099-b998-e4ac284b0327', true, '9d25f12b-f529-4200-ae46-36b399f9c515', 'f96cdc2d-f841-4850-a901-df8c7068767d');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('92eb9bbc-0b64-4faf-be0b-1f6221c833f7', true, '9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab', 'f96cdc2d-f841-4850-a901-df8c7068767d');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('caa7c009-3de4-4a48-b1ba-b973f6c6bc55', true, 'aa786bd5-9540-4321-b651-7c3371f27fd1', '3ab8b412-054a-49bb-94cc-4709aee0e3a8');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('9bdff067-bf61-4dde-b301-eb46d7453cd8', true, '9d25f12b-f529-4200-ae46-36b399f9c515', 'aa4ca43b-d093-43ae-b2e9-722c257e3faf');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('9446f9f4-f3d6-4588-b1c3-a2265ebd7158', false, 'bf6a28d2-f9c8-4e33-a46f-812adef6f763', 'f96cdc2d-f841-4850-a901-df8c7068767d');
INSERT INTO "UserPreference" ("id", "notificationEnabled", "userId", "categoryId") VALUES ('46a02a12-ce4f-4f9e-a33a-a3a4b4d4e0de', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c16518c6-2035-4579-bfaf-2ab46faacd0a');

INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('2757268a-2b4b-4da0-9a23-d71a69da5464', '2023-10-23T10:17:31.104Z', '9d25f12b-f529-4200-ae46-36b399f9c515', '4e246d33-116c-4bd1-aecd-d88da9ee7880');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('873c2b48-4c27-4471-8b17-7ceedeb28e5c', '2024-05-01T22:39:02.488Z', 'c85f74fe-8b83-41bb-aa18-e99dbc40bd76', '274ace09-3475-45a4-88c4-b7a38fb48e4e');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('b44b68a8-b41e-4e8f-af41-1dc25f568330', '2025-05-24T21:17:40.261Z', '792b9f3d-01e5-4576-b1ff-8417577638fe', 'f4c28f38-9f9b-4550-ab3f-26a92b52bf78');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('0be4fc25-adf9-4f2c-b0fe-06d40ff4ac86', '2025-02-25T15:58:02.354Z', 'c85f74fe-8b83-41bb-aa18-e99dbc40bd76', '313d1396-3561-4079-951d-d6b2c54dd454');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('3b33b314-4fff-4aba-9525-81646babab5e', '2024-08-04T05:51:58.477Z', 'aa786bd5-9540-4321-b651-7c3371f27fd1', '313d1396-3561-4079-951d-d6b2c54dd454');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('1e941753-e2ab-4ef3-8669-f18f22eb206a', '2025-01-03T18:04:51.887Z', 'c85f74fe-8b83-41bb-aa18-e99dbc40bd76', '4e246d33-116c-4bd1-aecd-d88da9ee7880');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('790b8111-c169-43b9-ae79-b912491db9aa', '2025-09-10T08:49:34.669Z', '792b9f3d-01e5-4576-b1ff-8417577638fe', 'f4c28f38-9f9b-4550-ab3f-26a92b52bf78');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('168be682-f50b-4d8e-b892-fa22b6d47099', '2024-12-07T01:28:51.817Z', '8c2e52d0-fef6-4d9a-8501-a887d098dd19', 'dc590f68-9200-4f89-ad3a-6451e9234198');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('fa2f1c7e-57fa-4849-9fdc-c9096de3a8e3', '2025-03-30T11:00:15.824Z', '9a33cd4d-ded9-4d99-8c06-ed97b8f9f2ab', 'dc590f68-9200-4f89-ad3a-6451e9234198');
INSERT INTO "Bookmark" ("id", "createdAt", "userId", "articleId") VALUES ('e85b644f-e597-4200-b0ce-41f8bab77f56', '2025-09-11T15:54:35.058Z', 'aa786bd5-9540-4321-b651-7c3371f27fd1', '313d1396-3561-4079-951d-d6b2c54dd454');

INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('2aaa4216-b2e0-4353-939b-bd649d7950f1', 'Global News', 'Weekly roundup of sports events.', 'Daily');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('235eab6f-01ec-4b4f-bac0-5da371b50610', 'Tech Trends', 'Weekly roundup of sports events.', 'Weekly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('293b69aa-0ac3-4fef-9382-e77acb7dc072', 'Global News', 'Comprehensive global news coverage.', 'Weekly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('d488eb7b-ca31-4212-afd1-968f604330ce', 'Tech Trends', 'Your daily dose of top news stories.', 'Monthly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('8c854251-3318-4c5f-8902-4d4f58481e1f', 'Global News', 'Latest updates in technology.', 'Weekly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('5e57115d-b86f-4ae9-8244-f29e3414138d', 'Daily Digest', 'Latest updates in technology.', 'Quarterly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('106cde25-1bef-475b-b2a6-82b84ecebe62', 'Sports Weekly', 'Weekly roundup of sports events.', 'Daily');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('7072a879-b924-463a-ba1a-915c49bf4ad3', 'Global News', 'Insights and tips for a healthier life.', 'Monthly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('9894a7d5-1618-4b65-9a3f-e0ae27420f08', 'Tech Trends', 'Insights and tips for a healthier life.', 'Biweekly');
INSERT INTO "Newsletter" ("id", "name", "description", "frequency") VALUES ('4d451ee1-f52b-4960-adef-edb68c2be56f', 'Sports Weekly', 'Your daily dose of top news stories.', 'Daily');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
