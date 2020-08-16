<<<<<<< HEAD
=======
/**
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
>>>>>>> master
import React from 'react'
import {
  signupContent,
  signupForm,
  signupRow,
} from './SignUpContainer.module.scss'
import { Row, Column } from 'gatsby-theme-carbon'
import { Button, TextInput } from 'carbon-components-react'

export const SignUpContainer = ({ title, subTitle }) => (
  <div className={signupContent}>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>

    <div className={signupForm}>
      <h3>Special Pricing Available</h3>
      <Row>
        <Column colMd={12} colLg={6} className={signupRow}>
          <TextInput placeholder="First Name" labelText="" id="first-name" />
        </Column>
        <Column colMd={12} colLg={6} className={signupRow}>
          <TextInput placeholder="Last Name" labelText="" id="last-name" />
        </Column>

        <Column colMd={12} colLg={12} className={signupRow}>
          <TextInput placeholder="Email address" labelText="" id="email" />
        </Column>

        <Column colMd={12} colLg={12} className={signupRow}>
          <TextInput placeholder="Create password" labelText="" id="password" />
        </Column>

        <Column colMd={12} colLg={12} className={signupRow}>
          <Button>Request Information</Button>
        </Column>
      </Row>
    </div>
  </div>
)
