/*
 *  Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 *  WSO2 LLC. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

package com.wso2_sample.api_auth_sample.features.login.domain.repository

import io.asgardeo.android.core.provider.providers.authentication.AuthenticationProvider
import io.asgardeo.android.core.provider.providers.token.TokenProvider

/**
 * Use as a repository to handle the authentication related operations using Asgardeo authentication SDK.
 */
interface AsgardeoAuthRepository {
    fun initializeAsgardeoAuth(integrityToken: String?)
    fun getAuthenticationProvider(): AuthenticationProvider
    fun getTokenProvider(): TokenProvider
}
