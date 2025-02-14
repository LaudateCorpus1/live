/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Blob.h"

namespace torchlive {
namespace media {

Blob::Blob(uint8_t* const b, size_t bl) : buffer(b), byteLength(bl) {}

uint8_t* const Blob::getDirectBytes() {
  return this->buffer;
}

size_t Blob::getDirectSize() {
  return this->byteLength;
}

} // namespace media
} // namespace torchlive
