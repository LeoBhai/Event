/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createNewsSourceRouter from "./NewsSource.router";
import createCategoryRouter from "./Category.router";
import createArticleRouter from "./Article.router";
import createUserPreferenceRouter from "./UserPreference.router";
import createBookmarkRouter from "./Bookmark.router";
import createNewsletterRouter from "./Newsletter.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createRagVectorRouter from "./RagVector.router";
import createSessionRouter from "./Session.router";
import { ClientType as NewsSourceClientType } from "./NewsSource.router";
import { ClientType as CategoryClientType } from "./Category.router";
import { ClientType as ArticleClientType } from "./Article.router";
import { ClientType as UserPreferenceClientType } from "./UserPreference.router";
import { ClientType as BookmarkClientType } from "./Bookmark.router";
import { ClientType as NewsletterClientType } from "./Newsletter.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        newsSource: createNewsSourceRouter(router, procedure),
        category: createCategoryRouter(router, procedure),
        article: createArticleRouter(router, procedure),
        userPreference: createUserPreferenceRouter(router, procedure),
        bookmark: createBookmarkRouter(router, procedure),
        newsletter: createNewsletterRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    newsSource: NewsSourceClientType<AppRouter>;
    category: CategoryClientType<AppRouter>;
    article: ArticleClientType<AppRouter>;
    userPreference: UserPreferenceClientType<AppRouter>;
    bookmark: BookmarkClientType<AppRouter>;
    newsletter: NewsletterClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
